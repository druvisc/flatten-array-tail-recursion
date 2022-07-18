const assert = require("assert");

const { array } = require("./utils");

// describe('utils/array.flatten')
// test('wraps single value in an array')
assert.deepEqual(array.flatten(0), [0]);
assert.deepEqual(array.flatten("abc"), ["abc"]);
assert.deepEqual(array.flatten({ test: 123 }), [{ test: 123 }]);
// test('flattens empty array')
assert.deepEqual(array.flatten([]), []);
assert.deepEqual(array.flatten([[[]]]), []);
// test('flattens nested values')
assert.deepEqual(array.flatten([1, [2, [3]], 4]), [1, 2, 3, 4]);
assert.deepEqual(array.flatten([["a"], [1, ["b"]], [2, [3, ["c"]]]]), [
  "a",
  1,
  "b",
  2,
  3,
  "c",
]);
//
