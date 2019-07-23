const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected))
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//flatten: A function which will take in an array of arrays and return a "flattened" version of the array.
const flatten = function(arr) {
  let dest = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]))
      for (let j = 0; j < arr[i].length; j++)
        //dest[dest.length] = arr[i][j];
        dest.push(arr[i][j]);
    else
      //dest[dest.length] = arr[i];
      dest.push(arr[i]);
  }
  return dest;
};

//Test cases

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, 3], 4, [5, 6], 5, [7, 2]]), [1, 2, 3, 4, 5, 6, 5, 7, 2]);
assertArraysEqual(flatten([1, 2, 3, 4, [5, 6, 7, 8, 9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
