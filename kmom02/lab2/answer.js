/**
 * @preserve 8b9c6f0fce0e088a2547ed6dcc66ab6b
 *
 * 8b9c6f0fce0e088a2547ed6dcc66ab6b
 * javascript1
 * lab2
 * v2
 * elge19
 * 2019-11-12 08:53:36
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-11-12 09:53:36 by dbwebb lab-utility v4.0.0 (2019-03-05).
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
 * Lab 2 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `3, 5, 3, 7, 1` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var card1 = 3;

var card2 = 5;

var card3 = 3;

var card4 = 7;

var card5 = 1;



var result = card1 + card2 + card3 + card4 + card5;

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use an `if statement` to see if the five cards (card1-card5) have a
 * combined sum that is higher than 21.
 *
 * Create a variable `status` and give it a different value depending on the
 * following.
 *
 * * If the sum is higher than 21, give your variable the value `"busted"`.
 * * Else give it the value `"safe"`.
 *
 * Answer with your status-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

if (result > 21) {
    var status;

    status = "busted";
} else {
    status = "safe";
}



//should I return it?

ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var result13 = card1 + card2 + card3;

if (result13 > 21) {
    status = "busted";
} else if (result13 < 21) {
    status = "safe";
} else {
    status = "black jack";
}




ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `2, 4, 2` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable, and answer with it.
 *
 * PS. You can change the sum to test that your if-statement really works for
 * all values, just to try it out.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var dealer1 = 2;

var dealer2 = 4;

var dealer3 = 2;

var result14 = dealer1 + dealer2 + dealer3;

if (result14 < 17) {
    result14 = "pick";
} else if (result14 >= 17 && result14 < 21) {
    result14 = "stop";
} else if (result14 == 21) {
    result14 = "busted";
}




ANSWER = result14;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use a switch-case statement to create a message with the type of fruit and
 * its color. You have the following type of fruits with a corresponding
 * color:
 *
 * * banana: yellow
 * * apple: green
 * * kiwi: green
 * * plum: purple
 *
 * Create a variable `myFruit` which holds the current type of your fruit. If
 * 'myFruit' is banana, the result should be a variable containing the string
 * value `"The banana is yellow."`
 *
 * Ensure that your switch-case works for all values.
 *
 * Answer with the result where `myFruit = "apple"`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


 var text;

 var myFruit = "apple";

 switch (myFruit) {
   case "banana":
     text = "The banana is yellow";
     break;
   case "apple":
     text = "The apple is green.";
     break;
   case "kiwi":
     text = "The kiwi is green";
     break;
   case "plum":
     text = "The plum is purple";
     break;
 }





ANSWER = text;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Extend your switch-case statement with a `default value`. The result should
 * be:
 *
 * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



 var myFruit2 = "pear";

 switch (myFruit2) {
   case "banana":
     text = "The banana is yellow";
     break;
   case "apple":
     text = "The apple is green";
     break;
   case "kiwi":
     text = "The kiwi is green";
     break;
   case "plum":
     text = "The plum is purple";
     break;
    default:
     text = "That is an unknown fruit.";
}



ANSWER = text;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Use a `for-loop` to increment `413` with the value `4`, `19` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var num31 = 413;
var y = 0;

for (; y < 19;) {
    num31 += 4;
    y++;
    console.log(num31);
}


ANSWER = num31;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 *
 * Use a for-loop to decrement `142` with the value `3`, `18` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


 var num32 = 142;

 var x = 0;

 for (; x < 18;) {
   num32 -= 3;
   x++;
   console.log(num32);
}

ANSWER = num32;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (3 points)
 *
 * Use a for-loop to add all the even values in the range `20` to `45` to a
 * string with each number separated by a comma `,`.
 *
 * The result should not end with a comma. You should neither have a space
 * after the comma.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var sum33 = "";

for (var start1 = 20; start1 < 45; start1++) {
    if (start1 % 2 == 0) {
        sum33 +=  (start1 + ",");
    } else {
        continue;
    }
}


//noclue



ANSWER = sum33.substring(0, sum33.length - 1);
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 *
 * Use a `while-loop` to increment `19` with the value `4` until it has
 * reached or passed `413`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var num41 = 19;
var step = 0;

while (num41 <= 413) {
    num41 += 4;
    step++;
    //console.log(step);
}



ANSWER = step;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2 (1 points)
 *
 * Use a while-loop to subtract `3` from `142` until the value has reached or
 * passed `0`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var num43 = 142;
var step1 = "";

 while (num43 >= 0) {
    num43 -= 3;
    step1++;
     //console.log(step);
 }




ANSWER = step1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/**
 * Exercise 4.3 (3 points)
 *
 * Use a while-loop to add all the values, to a comma-separated string, in the
 * range `28` to `61`, where the value is divisable by 5 or 7.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var allval = "";

var start = 28;


while (start < 61) {
    if (start % 5 == 0 || start % 7 == 0) {
        allval += (start + ",");
    }
start++;
}



ANSWER = allval.substring(0, allval.length - 1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
