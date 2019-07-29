const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]], [[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]]), true); // => false
assertEqual(eqArrays([[2, 3, [6, [6, 7, [1, 6, 7, 8]]]], [4]], [[2, 3, [6, [6, 7, [1, 6, 9, 8]]]], [4]]), false); // => false