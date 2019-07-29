const countOnly = require('../countOnly');
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("object returns correct counts and undefined if not in the original array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), {"Jason": 1, "Fang": 2});
  });
});