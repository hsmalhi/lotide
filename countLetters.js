const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// str: the string that we need to look through
const countLetters = function(str) {
  const results = {};
  str = str.replace(' ', '');

  for (const letter of str) {
    if (!results[letter])
      results[letter] = 1;
    else
      results[letter]++;
  }

  return results;
};

/*
//Test code
const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["e"], 3);
*/