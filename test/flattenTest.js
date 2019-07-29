const flatten = require('../flatten');
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 5, 7, 2] for [[1, 2, 3], 4, [5, 6], 5, [7, 2]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9] for [1, 2, 3, 4, [5, 6, 7, 8, 9]]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, [5, 6, 7, 8, 9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});