const execSync = require('child_process').execSync;
const RegClient = require('npm-registry-client');
const fs = require('fs');
const path = require('path');
var argv = require('yargs').argv;

// Creates a new registry client
var client = new RegClient({});

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Functions 
function processArguments() {
  // --user
  // --password
  // --email
  // --registry?
  var registry = argv.registry || 'https://registry.npmjs.org';
  var homePath = process.env.HOME ? process.env.HOME : process.env.USERPROFILE;
  var finalPath = argv.configPath ? argv.configPath : path.join(homePath, '.npmrc');
  var args = {
      user: argv.user,
      password: argv.password,
      email: argv.email,
      registry: registry,
      scope: argv.scope,
      quotes: argv.quotes,
      configPath: finalPath
  };
  return args;
}

function login(args, callback){
    console.log('args.registry', args.registry);
    console.log('args.user', args.user);
    console.log('args.password', args.password);
    console.log('args.email', args.email);
  client.adduser(args.registry, {
      auth: {
          username: args.user,
          password: args.password,
          email: args.email
      }
  }, function (err, data) {
      if (err) {
          return callback(err);
      }
      return callback(null, data);
  });
}

function readFile(args, callback) {
  fs.readFile(args.configPath, 'utf-8', function (err, contents) {
      if (err) {
          contents = '';
      }
      return callback(null, contents);
  });
}

function generateFileContents(args, contents, response){
  // `contents` holds the initial content of the NPMRC file
  // Convert the file contents into an array
  var lines = contents ? contents.split('\n') : [];

  if (args.scope !== undefined) {
      var scopeWrite = lines.findIndex(function (element) {
          if ( element.indexOf(args.scope + ':registry=' + args.registry) !== -1) {
              // If an entry for the scope is found, replace it
              element = args.scope + ':registry=' + args.registry;
              return true;
          }
      });

      // If no entry for the scope is found, add one
      if ( scopeWrite === -1 ) {
          lines.push(args.scope + ':registry=' + args.registry);
      }
  }

  var authWrite = lines.findIndex(function (element, index, array) {
      if ( element.indexOf(args.registry.slice(args.registry.search(/\:\/\//, '') + 1) +
      '/:_authToken=') !== -1) {
          // If an entry for the auth token is found, replace it
          array[index] = element.replace(/authToken\=.*/, 'authToken=' + (args.quotes ? '"' : '') +
          response.token + (args.quotes ? '"' : ''));
          return true;
      }
  });

  // If no entry for the auth token is found, add one
  if (authWrite === -1) {
      lines.push(args.registry.slice(args.registry.search(/\:\/\//, '') +
      1) + '/:_authToken=' + (args.quotes ? '"' : '') + response.token + (args.quotes ? '"' : ''));
  }

  var toWrite = lines.filter(function (element) {
      if (element === '') {
          return false;
      }
      return true;
  });

  return toWrite;
}

function writeFile(args, lines){
  fs.writeFileSync(args.configPath, lines.join('\n') + '\n');
}

function npmLogin() {
  var finalArgs = processArguments();
  var response;
  var contents;
  var newContents;

  return new Promise(function (resolve, reject) {
      login(finalArgs, function (err, data) {
          if (err) {
              reject(err);
          }
          else {
              response = data;
              readFile(finalArgs, function (err, data) {
                  if (err) {
                      reject(err);
                  }
                  else {
                      contents = data;
                      newContents = generateFileContents(finalArgs, contents, response);
                      writeFile(finalArgs, newContents);
                      resolve();
                  }
              });
          }
      });
  });
}

const exitProcess = () => {
    execSync('npm logout');
    console.log('🐙🐙🐙 Successfuly Logged Out 🐙🐙🐙');
    process.exit(0);
}

try {
    execSync('npm logout');
} catch (error) {
    console.log('we have a failure in npm logout.. continuing on', error);
}

npmLogin().then(() => {
  console.log('🐙🐙🐙 Successful login 🐙🐙🐙');
  execSync('npm publish');
  console.log('🐙🐙🐙 Successfuly Published 🐙🐙🐙');
  exitProcess();
}).catch(err => {
  console.log(err);
  exitProcess();
})
