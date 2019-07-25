const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callback) {
  for (key in object){
    if (callback(object[key])){
      return key;
    }
  }
  return undefined
}

//Test code
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey({
//   "First":  { a: 1, b: 2 },
//   "Second": { a: 1, b: 2 },
//   "Third":  { a: 1, b: 2, c: 6 }
// }, x => Object.keys(x) == Array([ 'a', 'b' ]), "First"));

// assertEqual(findKey({
//   "PowerA": 34,
//   "PowerB": 1,
//   "PowerC": 55,
//   "PowerD": 55,
//   "PowerE": 55
// }, x => x === 55), "PowerC");