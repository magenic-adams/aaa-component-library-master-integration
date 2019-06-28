/* eslint-disable no-useless-escape */
/**
 * Defines the regular expressions that will be used for validations
 */
export default {
  alphaRegex: /^[a-z]+$/i,
  alphaNumericRegex: /^[a-z0-9]+$/i,
  alphaDashRegex: /^[a-z0-9_]+$/i,
  alphaDashSpaceRegex: /^[a-z\s\-]+$/i,
  alphaDashDotSpaceRegex: /^[a-z\.\s\-]+$/i,
  alphaNameRegex: /^[a-zA-Z\-\']+$/i,
  decimalRegex: /^\-?[0-9]*\.?[0-9]+$/,
  emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  emptyStringRegex: /^\s*$/,
  integerRegex: /^-?[0-9]+$/,
  ipRegex: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
  naturalRegex: /^[0-9]+$/i,
  naturalNoZeroRegex: /^[1-9][0-9]*$/i,
  numericDashRegex: /^[\d\-\s]+$/,
  numericRegex: /^[0-9]+([.,][0-9]+)?$/,
  ruleRegex: /^(.+?)\[(.+)\]$/,
  urlRegex: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
};
