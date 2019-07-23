const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//Returns the first element in the array.
//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head
const head = function(arr) {
  if (arr.length > 0)
    return arr[0];
  else
    return undefined;
};

//Test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3]), 3);
assertEqual(head([]), undefined);