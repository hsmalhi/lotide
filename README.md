# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hsmalhi/lotide`

**Require it:**

`const _ = require('@hsmalhi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: uses eqArrays to check if two arrays are equal and prints messages
* `assertEqual(...)`: checks if two values are equal
* `assertObjectsEqual(...)`: uses eqObjects to check if two objects are equal and prints messages
* `countLetters(...)`: returns the count of each letter in a string
* `countOnly(...)`: returns the count of each letter in a string, but only for the letters specified
* `eqArrays(...)`: checks if two arrays are equal
* `eqObjects(...)`: checks if two objects are equal
* `findKey(...)`: returns the key of a given object, if the key's value satisfies the callback function
* `findKeyByValue(...)`: finds a key based on the value passed
* `flatten(...)`: flattens a nested array
* `head(...)`: returns the head of an array (first element)
* `middle(...)`: returns the middle of an array (one or two elements)
* `tail(...)`: returns the tail of an array
* `letterPositions(...)`:  an object where the keys are the letters in a string and the values are the indexes at which those letters appear 
* `map(...)`: based on the callback function provided, performs the function on each element of an array and returns a new array
* `takeUntil(...)`: returns 
* `without(...)`: description