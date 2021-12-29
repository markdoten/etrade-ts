/**
 * @file Utilities.
 */

/**
 * Recursively convert title case object properties into camel case until a
 * child has no title case properties.
 * @param {Object} obj - Object with title case properties to convert.
 * @returns {Object} - Converted object.
 */
export const titleToCamelProperties = (obj: Record<string, any>): Record<string, any> => {
  // If there are no title cased keys, no more processing to be done.
  if (!Object.keys(obj).some((key: string): boolean => /[A-Z]/.test(key[0]))) {
    return obj;
  }
  const _obj = {...obj};
  for (const key in _obj) {
    const camelCase = titleToCamel(key);
    _obj[camelCase] = _obj[key];
    if (camelCase !== key) {
      delete _obj[key];
    }
    if (typeof _obj[camelCase] === 'object') {
      _obj[camelCase] = titleToCamelProperties(_obj[camelCase]);
    }
  }
  return _obj;
};

/**
 * Convert a string from title case to camel case.
 * @param {string} str - The string to convert to camel case.
 * @returns {string} - Converted string.
 */
export const titleToCamel = (str: string): string => `${str[0].toLowerCase()}${str.substring(1)}`;