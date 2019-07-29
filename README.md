# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hsmalhi94/lotide`

**Require it:**

`const _ = require('@hsmalhi94/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: uses eqArrays to check if two arrays are equal and prints messages
* `assertEqual(actual, expected)`: checks if two values are equal
* `assertObjectsEqual(actual, expected)`: uses eqObjects to check if two objects are equal and prints messages
* `countLetters(str)`: returns the count of each letter in a string
* `countOnly(allItems, itemsToCount)`: returns the count of each letter in a string, but only for the letters specified
* `eqArrays(arr1, arr2)`: checks if two arrays are equal
* `eqObjects(object1, object2)`: checks if two objects are equal
* `findKey(object, callback)`: returns the key of a given object, if the key's value satisfies the callback function
* `findKeyByValue(object, value)`: finds a key based on the value passed
* `flatten(arr)`: flattens a nested array
* `head(arr)`: returns the head of an array (first element)
* `middle(arr)`: returns the middle of an array (one or two elements)
* `tail(arr)`: returns the tail of an array
* `letterPositions(sentence)`:  returns an object where the keys are the letters in a string and the values are the indexes at which those letters appear 
* `map(array, callback)`: based on the callback function provided, performs the function on each element of an array and returns a new array
* `takeUntil(array, callback)`: returns all items from a provided array until the callback provided returns a truthy value
* `without(source, itemsToRemove)`: returns an array without the items that were specified in the itemsToRemove parameter