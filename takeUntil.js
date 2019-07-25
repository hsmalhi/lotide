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

//Function takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array){
    if (callback(item))
      return result;
    else
      result.push(item);
  }
  return result;
};

//Test code
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); 

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

// const data3 = ["Track1", "Track2", "Track3", "Track4", "Track5", "Playlist1", "Playlist2", "Playlist3"];
// assertArraysEqual(takeUntil(data3, x => (!(x.includes("Track")))), ["Track1", "Track2", "Track3", "Track4", "Track5"]);