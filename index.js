const assert = require("assert");

const { array } = require("./utils");

try {
  assert.deepEqual(array.flatten([1, [2, [3]], 4]), [1, 2, 3, 4]);
} catch (error) {
  console.log(error);
}
