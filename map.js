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

const map = function(array, callback) {
  const results = [];
  for (let item of array)
    results.push(callback(item));
  return results;
}

//Test code
// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 5, 6, 7, 8, 10];
// const arrayOfNumbers = [[1, 6], [5], [6, 8, 9, 10], [7], [8], []];
// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']) ;
// assertArraysEqual(map(numbers, number => number + 10), [11, 15, 16, 17, 18, 20]) ;
// assertArraysEqual(map(arrayOfNumbers, array => array.length), [2, 1, 4, 1, 1, 0]) ;