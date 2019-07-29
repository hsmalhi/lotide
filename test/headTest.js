const head = require('../head');
const assertEqual = require('../assertEqual');

//Test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3]), 3);
assertEqual(head([]), undefined);