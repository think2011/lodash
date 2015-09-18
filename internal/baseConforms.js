import keysIn from '../object/keysIn';

/**
 * The base implementation of `_.conforms` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property predicates to conform to.
 * @returns {Function} Returns the new function.
 */
function baseConforms(source) {
  var props = keysIn(source),
      length = props.length;

  return function(object) {
    if (object == null) {
      return !length;
    }
    var index = length;
    while (index--) {
      var key = props[index],
          predicate = source[key],
          value = object[key];

      if ((value === undefined && !(key in Object(object))) || !predicate(value)) {
        return false;
      }
    }
    return true;
  };
}

export default baseConforms;
