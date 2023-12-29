const isString = value => typeof value === 'string';
const isNumber = value => typeof value === 'number';
const isArray = value => Array.isArray(value);

export const assert = {
  isString,
  isNumber,
  isArray,
};
