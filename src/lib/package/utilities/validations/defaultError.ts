import regex from './regex';

const dynamicErrors:{[rule:string]: (param:string) => string} = {
  greater_than: (param:string) => `This amount must be greater than ${param}`,
  less_than: (param:string) => `This amount must be less than ${param}`,
};


// TODO: create generic errors for non-param cases
const staticErrors:{[rule:string]: string} = {
  greater_than: 'This field has minimum validation error',
  less_than: 'This field has maxiumum validation error',
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
