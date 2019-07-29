const middle = function(arr) {
  let midArr = [];
  if (arr.length <= 2)
    return midArr;
  let mid = arr.length / 2;
  if ((mid % 1) !== 0)
    midArr[0] = arr[Math.floor(mid)];
  else {
    midArr[0] = arr[mid - 1];
    midArr[1] = arr[mid];
  }
  return midArr;
};

module.exports = middle;
