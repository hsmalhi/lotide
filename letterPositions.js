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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(' ', '');

  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]])
      results[sentence[i]] = [i];
    else
      results[sentence[i]].push(i);
  }

  return results;
};


//Test code
testResult = letterPositions("hello");
assertArraysEqual(testResult["h"], [0]);
assertArraysEqual(testResult["e"], [1]);
assertArraysEqual(testResult["l"], [2, 3]);
assertArraysEqual(testResult["o"], [4]);
