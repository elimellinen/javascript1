/**
 * @preserve 46f965265b2106e5a8bab68e05d4bf65
 *
 * 46f965265b2106e5a8bab68e05d4bf65
 * javascript1
 * lab3
 * v2
 * elge19
 * 2019-11-20 12:43:32
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-11-20 13:43:32 by dbwebb lab-utility v4.0.0 (2019-03-05).
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
 * Lab 3 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values `24 and 99`, answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var start;

var end;

var sum = 0;

function sumRangeNumbers(start, end) {
    for (;start <= end;) {
        sum = sum + start;
        start++;
    }
    return(sum);
}

//U. Why?

ANSWER = sumRangeNumbers(24, 99);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 * Try it out using the fruit `banana` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var fruit;

function fruitColor(fruit) {
    if (fruit == "banana") {
        return "yellow";
    } else if (fruit == "apple" || fruit == "kiwi") {
        return "green";
    } else if (fruit == "plum") {
        return "red";
    } else {
        return "I don't know.";
    }
}



ANSWER = fruitColor("banana");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `25 and 49`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var res = "";

var rangeStart;

var rangeStop;

function printRange(rangeStart, rangeStop) {
    for (;rangeStart <= rangeStop; rangeStart++) {
        res += rangeStart + ",";
    }
return res.substring(0, res.length - 1);
}



ANSWER = printRange(25, 49);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `49 and 25`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var resReversed = "";

function printRangeReversed(rangeStart, rangeStop) {
    for (;rangeStart >= rangeStop; rangeStart--) {
        resReversed += rangeStart + ","
    }
return resReversed.substring(0, resReversed.length - 1);
}



ANSWER = printRangeReversed(49, 25);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `25 and 49` (both ways).
 *
 * Answer with the result using arguments 25 and 49.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var rstart;
var rstop;

function printAnyRange(rstart, rstop) {
    if (rstart < rstop) {
        return printRange(rangeStart, rangeStop);
    } else if (rstart > rstop) {
        return printRangeReversed(rangeStart, rangeStop);
        }
    }


ANSWER = printAnyRange(25, 49);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a function called `stringRepeat()` that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: `pink` and `11`. The number represents the number of times the
 * string should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var color = "pink";
var num16 = 11;
var resString = "";

function stringRepeat(color, num16) {
    return color.repeat(num16);
}




ANSWER = stringRepeat(color, num16);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 * Try it out using the range `106 - 591` and the value `291`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var rangeStart1;

var rangeStop1;

var value;

function inRange(rangeStart1, rangeStop1, value) {
    if (value > rangeStart1 && value < rangeStop1) {
        return true;
    } else {
        return false;
    }
}



ANSWER = inRange(106, 591, 291);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Try out the function `inRange()` using the range `106 - 591` and the value
 * `689`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = inRange(106, 591, 689);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 *
 * Create a function called `degreesToRadians()` that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value `177` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var degreeValue;

var radianValue;

function degreesToRadians(degreeValue) {
    radianValue = degreeValue * ((Math.PI)/180);
    return Math.round(radianValue*10000)/10000;
}




ANSWER = degreesToRadians(177)

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10 (1 points)
 *
 * Create a function called `fizzBuzz()` that takes two arguments `start` and
 * `stop` and returns a comma-separated string.
 *
 * The arguments represents the starting point and stop point of the game
 * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
 * run from start to stop and add `Fizz`, `Buzz` or both to your
 * result-variable at appropriate numbers.
 *
 * Each entry to your result should be comma-separated. If `stop` is equal or
 * lower than `start`, the function should return an appropriate error
 * message.
 *
 * Test the function using `start=5 and stop=29`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var start;

var stop;

var ress = "";

function fizzBuzz(start, stop) {
    for (; start <= stop; start++) {
        if(start % 3 == 0 && start % 5 == 0) {
            ress = ress + "Fizz Buzz" + ",";
        } else if(start % 3 == 0) {
            ress = ress + "Fizz" + ",";
        } else if(start % 5 == 0) {
            ress = ress + "Buzz" + ",";
        } else {
            ress = ress + start + ",";
        }
    }
    return ress.substring(0, ress.length - 1);
}





ANSWER = fizzBuzz(5, 29);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 *
 * Create a function called `printSum()` that should take two variables, the
 * sum of the players hand and the sum of the dealers hand.
 *
 * Your hand should be three cards with the values: `10, 9 and 4`.
 * The dealers hand should be three card with the values: `11, 8, 7`.
 * The function should return the sum and the player: `Player: 23, Dealer:
 * 26`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (3 points)
 *
 * Create a function called `printResult()` that should take two variables,
 * the sum of the players hand and the sum of the dealers hand.
 *
 * Players hand should be three cards with the values: `10, 9 and 4`. The
 * dealers hand should be three card with the values: `11, 8, 7`.
 *
 * This time you should include the check from lab 2 where you find out the
 * boundaries of the player and the dealer.
 * Player hand = 21 (black jack).
 * Player hand less than 21 (safe).
 * Player hand larger than 21 (busted).
 * Dealer hand less than 17 (safe).
 * Dealer hand larger or equal to 17 and less than 21 (stop).
 * Dealer hand = 21 (black jack).
 * Delaer hand larger than 21 (busted).
 *
 * Return a string in the format: `Player: safe, Dealer: busted`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (3 points)
 *
 * Create a function called `calculateInterest()` that returns the money you
 * have after x years of interest, given three arguments: `711, 19 and 3`.
 * First argument represents the start money, the second argument represents
 * the number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
