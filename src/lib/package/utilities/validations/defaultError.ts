import regex from './regex';

const dynamicErrors:{[rule:string]: (param:string) => string} = {
  at_least: (param:string) => `This amount must be at least ${param}`,
  at_most: (param:string) => `This amount must be less than or equal to ${param}`,
};


// TODO: create generic errors for non-param cases
const staticErrors:{[rule:string]: string} = {
  at_least: 'This field has minimum validation error',
  at_most: 'This field has maxiumum validation error',
};

/**
 * If no error, surface a default message
 * @param  {string} ruleKey
 * @return {string} errorMessage
 */
export default function generateDefaultErrorRule(ruleKey:string):string{
  const parts = regex.ruleRegex.exec(ruleKey);
  if (parts){
    const [, rule, param] = parts;
    if (dynamicErrors[rule]){
      return dynamicErrors[rule](param);
    }
  }

  if (staticErrors[ruleKey]){
    return staticErrors[ruleKey];
  }

  // Generic field-level validation error message
  return 'There is an error with this field';
}
