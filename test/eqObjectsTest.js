const eqObjects = require("../eqObjects");
//const assertEqual = require('../assertEqual');
const assert = require("chai").assert;

describe("#eqObjects", () => {
  const obj1 = {
    a: {
      b: {
        c: {
          x: 1,
          y: 2
        }
      }
    },
    b: {
      x: 55
    }
  };
  const obj2 = {
    b: {
      x: 55
    },
    a: {
      b: {
        c: {
          x: 1,
          y: 2
        }
      }
    }
  };
  const obj3 = {
    b: {
      x: 44
    },
    a: {
      b: {
        y: 6
      }
    }
  };

  it("compare two equal objects", () => {
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it("compare objects that are not equal", () => {
    assert.isFalse(eqObjects(obj1, obj3));
  });

  it("compare objects that are not equal", () => {
    assert.isFalse(eqObjects(obj3, obj2));
  });
});
