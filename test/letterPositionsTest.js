const letterPositions = require('../letterPositions');
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("return counts for `hello`", () => {
    assert.deepEqual(letterPositions("hello"), {"h": [0], "e": [1], "l": [2, 3], "o": [4]});
  });
});

// //Test code
// testResult = letterPositions("hello");
// assertArraysEqual(testResult["h"], [0]);
// assertArraysEqual(testResult["e"], [1]);
// assertArraysEqual(testResult["l"], [2, 3]);
// assertArraysEqual(testResult["o"], [4]);