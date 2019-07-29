const tail = require('../tail');
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#tail()", () => {
  it("should not modify original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.equal(words.length, 3);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});