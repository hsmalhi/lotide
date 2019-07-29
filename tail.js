//Returns all of the array except for the head
const tail = function(arr) {
  if (arr.length < 2)
    return [];
  else
    return arr.slice(1);
};

module.exports = tail;