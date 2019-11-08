/**
 * @preserve f3ef31dc39ab4e230db81152550ec810
 *
 * f3ef31dc39ab4e230db81152550ec810
 * javascript1
 * lab1
 * v2
 * elge19
 * 2019-11-05 13:26:49
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-11-05 14:26:50 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - variables and builtins
 *
 * The foundation of variables, numbers, strings and basic arithmetic and
 * built in functions.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Variables, numbers and built-in functions
 *
 * Use variables, numbers and built-in functions.
 *
 * One way to round a float to a certain amount of decimals is:
 *
 * Math.round(val*10000)/10000
 *
 * Where `val` is your float number.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create two variables, `floatOne` and `floatTwo`.
 *
 * Give them the values `880.35` and `615.91`.
 *
 * Create a variable called `result` and assign to it the sum of the variables
 * above.
 *
 * Answer with the result, rounded to two decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var floatOne = 880.35;

var floatTwo = 615.91;

var result = floatOne + floatTwo;

var rounded = Math.round(result*100)/100;



ANSWER = rounded;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a variable `someIntText` and give it a string value of `"901.125
 * mouse"`.
 *
 * Use the function `parseInt()` to find out the integer representation of the
 * text.
 *
 * Assign the value to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var someIntText = "901.125 mouse";

var parsed;

parsed = parseInt(someIntText);



ANSWER = parsed;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use your variable `someIntText`.
 *
 * Use the function `parseFloat()` to find out the float representation of the
 * text.
 *
 * Assign the value to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var parsedFloat;

parsedFloat = parseFloat(someIntText);



ANSWER = parsedFloat;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Use the method `max()`, in Math, to find out the highest number in the
 * serie:
 *
 * 291,708,862,977
 *
 * Assign the number to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var result4;

result4 = Math.max(291, 708, 862, 977);




ANSWER = result4;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Use the Math property `PI` to get the float value of 'Pi'. Round the result
 * to 4 decimals.
 *
 * Assign the number to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var rounded5 = Math.round(Math.PI*10000)/10000;


ANSWER = rounded5;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Strings and built-in functions
 *
 * Work with strings and find out about the built-in functions.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Create a variable called `wordOne` and assign the word "bulldog" to it.
 *
 * Add (concatenate) the number `942` to the word and answer with the
 * resulting variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var wordOne = "bulldog";

var result21 = wordOne.concat(942);




ANSWER = result21;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Use the built-in method `charAt()` on the word "bulldog" to return the
 * character at a given index.
 *
 * Answer with the character at index 4.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



var index4 = wordOne.charAt(4);


ANSWER = index4;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (1 points)
 *
 * Use the built-in method `toUpperCase()` to transform the string:
 *
 * `"I am in a glass case of emotion."` to uppercase.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var string23 = "I am in a glass case of emotion.";
var capitalized = string23.toUpperCase();



ANSWER = capitalized;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/**
 * Exercise 2.4 (1 points)
 *
 * Use the built-int property `length` to find out the length of the string:
 * `"bulldog"`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var n = wordOne.length;


ANSWER = n;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.4", ANSWER, false);

/**
 * Exercise 2.5 (1 points)
 *
 * Use the built-int method `substr()` to extract the last three characters of
 * the word: `"bulldog"`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



var substringOne = wordOne.substr(4);


ANSWER = substringOne;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Extra assignments
 *
 * Solve these optional questions to earn extra points.
 *
 */



/**
 * Exercise 3.1 (3 points)
 *
 * Create a Date object called `myDate` and initiate it with: `"Aug 21,
 * 2001"`.
 *
 * Use the built-in function `Date.getFullYear()` to get the year from your
 * Date object.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (3 points)
 *
 * Create a new Date object that is equal to `myDate` plus `19` days.
 *
 * Use `Date.getDate()` and answer with the day of the month.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
