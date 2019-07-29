const assertEqual = require('./assertEqual');

//Returns the first element in the array.
//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head
const head = function(arr) {
  if (arr.length > 0)
    return arr[0];
  else
    return undefined;
};

module.exports = head;