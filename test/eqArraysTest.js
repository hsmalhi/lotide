const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("compare [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("compare [1, 2, 3] and [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it('compare ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('compare [[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]] and [[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]]', () => {
    assert.isTrue(eqArrays([[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]], [[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]]));
  });

  it("compare [[2, 3, [6, [6, 7, [1, 6, 7, 8]]]] and [4]], [[2, 3, [6, [6, 7, [1, 6, 9, 8]]]], [4]]", () => {
    assert.isFalse(eqArrays([[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]], [[2, 3, [6, [6, 7, [1, 6, 9, 8]]]], [4]]));
  });
});

// //Test code
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays([[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]], [[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]]), true); // => false
// assertEqual(eqArrays([[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]], [[2, 3, [6, [6, 7, [1, 6, 9, 8]]]], [4]]), false); // => false