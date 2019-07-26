const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length){
    for(key in object1){
      if (Array.isArray(object1[key])){
        if (!(eqArrays(object1[key], object2[key])))
          return false
      }
      else if ((typeof object1[key] === 'object') && (typeof object2[key] === 'object')){
        if (!(eqObjects(object1[key], object2[key])))
          return false
      }
      else if (object1[key] !== object2[key])
        return false
    }
    return true;
  }
  return false
};

//Test cases
//Primitives as values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//Arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

//Objects as values
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

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
}
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
}
const obj3 = {
  b: {
    x: 44
  },
  a: {
    b: {
      y: 6
    }
  }
}
assertEqual(eqObjects(obj1, obj2), true);
assertEqual(eqObjects(obj1, obj3), false);
assertEqual(eqObjects(obj3, obj2), false);