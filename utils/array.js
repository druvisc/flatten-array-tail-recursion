/**
 * Flatten a nested array using tail recursion.
 * @param {Array} arr Nested Array.
 * @returns {Array} Flattened Array.
 */
const flatten = (arr) => _flatten(arr);

// Wrapped to hide the second argument.
const _flatten = (arr, flattened = []) => {
  // The called upon value is not an array - add it and return the flattened array.
  if (!Array.isArray(arr)) {
    flattened.push(arr);

    return flattened;
  }

  // The array element been parsed - return the flattened array.
  if (!arr.length) return flattened;

  // Parse the first array element.
  flattened.push(..._flatten(arr[0]));

  // Parse the remaining array by tail recursing and discarding the current stack frame.
  return _flatten(arr.slice(1), flattened);
};

module.exports = {
  flatten,
};
