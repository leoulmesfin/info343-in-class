/*
    Introduction to JavaScript
    We will use this script to learn the fundamentals
    of the JavaScript language, which you can use in
    many contexts including a web browser.
    Open index.html and open the Developer Tools Console 
    to see output.

    JavaScript is an interpreted scripting language,
    so execution starts at the top of this script and
    continues downward to the end. There is no main
    entry point function/method.

    The @ts-check comment immediately following this
    block comment will turn on simple type-checking
    in Visual Studio Code. It has no effect on how
    this script executes at runtime in the browser
    and will be ignored by all other editors. But if
    you are using vscode, it will help catch some
    common errors while you are coding.
    See https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
*/
// @ts-check

//this statement switches the JavaScript interpreter
//into strict mode, which disables/prohibits several
//things you used to be able to do that generally
//led to more problems than benefits. This affects
//how the strict is interpreted by the browser at runtime.
//see https://drstearns.github.io/tutorials/javascript/#secstrictmode
"use strict";


/* VARIABLES

One major difference between JavaScript and Java
is that all variables are dynamically-typed. 
When you declare a variable, you don't specify
the data type, and you can assign a value of any
type to the variable at any time. Of course, it
is good practice to treat a variable as having
a single type, and only assign values of that 
type to that variable. The @ts-check above will
show an error if you switch types during a
variable's lifetime.

The primitive data types include:
- string
- number
- boolean
- `undefined` and `null`
*/

//TODO: declare a new variable named `x`
//and initialize it to a literal string


//the `console` object represents the developer
//tools console, or the terminal if you run this
//under Node.js. The `.log()` method writes the 
//value of an expression to the console.
//TODO: write `x` to the console


//if you don't initialize a new variable
//it's value is `undefined`
let uninitializedVariable;
console.log("uninitializedVariable is:", uninitializedVariable);


//variables declared with `let` have block scope
//similar to other languages like Java
//but variables declared with `var` are
//"hoisted" to function scope
var temp = 5;
if (temp > 0) {
    var temp = 1;
    temp++;
}
//what do you think the value of `temp` is after the if block?
//use console.log() to find out!


let temp2 = 5;
if (temp2 > 0) {
    let temp2 = 1;
    temp2++;
}
//what do you think the value of `temp2` is after the if block?
//use console.log() to find out!


//moral of the story: use `let` instead of `var`


/* ARRAYS

JavaScript has built-in support for arrays,
which are ordered collections of elements
that can be accessed randomly. Literal
array values are a comma-delimited list of
values surrounded by [ ]. 
To create a zero-length array, just use `[]`.
*/
//TODO: declare a variable named `emptyArray`
//and set it equal to an empty array

//TODO: declare a variable named `nums`
//and set it equal to an array of numbers
//containing 10,11,12,13,14


//the `.length` property returns 
//the number of elements in the array
//TODO: write the length of `nums` to the console


//you can add elements to the end of an array 
//using the build-in .push() method
//TODO: add the number 15 to the end of the `nums` array


//TODO: create a new variable named `courses`
//that is initialized to an array of strings,
//one for each course name you are currently 
//taking (e.g., "INFO 343"), 
//and write that to the console


//TODO: write the last element in the array to the console


/* FOR LOOPS
For loops work exactly like they do in Java,
only you don't give the iterator variable a data type
*/
console.group("for loop example")
for (let i = 0; i < 5; i++) {
    console.log("loop iterator is:", i);
}
console.groupEnd();

/* TODO: create a new zero-length
array, and use a for() loop to populate
the array with all the *even* numbers
between 0 and 49. Write the populated
array to the console to make sure you
did it right.
*/


/* OBJECTS

JavaScript also has built-in support for
"objects" which are really just hash-table 
maps. A map stores a collection of 
key and value pairs, kind of like a
dictionary stores words and definitions.
Keys must be strings, but values can be
of any data type, including arrays or
other objects.

Literal objects are a comma-delimited
list of `key: value` pairs, surrounded
by { }. To create an empty object, just
use `{}`.
*/

//TODO: declare a new variable named `emptyObject`
//and set it equal to an empty object


//TODO: declare a new variable named `player`
//and set it to an object with the following properties:
// firstName = "Mary"
// lastName = "Rodriguez"
// totalPoints = 4
// level = 0


//you can get the value for a key using
//the familiar `.` syntax
//TODO: write the firstName and lastName properties to the console


//you can also get the value for a key
//using an array-like syntax, which can
//accept an expression
//TODO: get the lastName property using the 
//array-like syntax, using a variable set to "lastName"
//as the expression


//these key/value pairs are often called "properties"
//because the syntax looks a lot like property 
//access in Java. But new properties can be added
//or removed at any time.
//TODO: add a new `email` property set to "mary@example.com"
//and write that to the console

//accessing a key that doesn't exist yet
//returns `undefined` (no error)
//TODO: write the value of the `phone` property to the console
//(doesn't exist, so it should just write "undefined", with no error)


//you can iterate over all keys/values using
//the for...in syntax
console.group("keys/values from player using for...in");
//TODO: iterate over all keys/values using for...in
console.groupEnd();

//or you can get the keys as an array using Object.keys()
//and iterate over that array of keys
console.group("keys/values from player using Object.keys()");
//TODO: use Object.keys(player) to get an array with all the
//keys, and then iterate that using a standard for loop
console.groupEnd();

//TODO: reset your `courses` variable defined
//above to an array of objects, each of which
//represents a course you are taking
//each object should have the following properties:
// - name: the course name (e.g., "INFO 343")
// - section: the section letter (e.g., "A, B")
//          or omit if there is no section letter
// - teachers: an array containing the names of your teacher and TA(s)
//          for that course


//TODO: write the first teacher name from the 
//last course in the `courses` array to the console



/* FUNCTIONS
JavaScript functions look similar to Java
methods, only they aren't attached to a class,
their parameters have no explicit data types
and you don't specify the data type of the 
return value. A function that doesn't return
a value returns `undefined` implicitly.
*/

//the comment above this function is in jsdoc
//format, and it has no effect on how this script
//is interpreted at runtime, but it does help
//editors like vscode provide helpful information
//about this function while you are coding

/**
 * Returns a greeting for a player
 * @param {Object} thePlayer 
 * @returns {string}
 */
function getGreeting(thePlayer) {
    return "Hello " + thePlayer.firstName + "!";
}
//TODO: call getGreeting() passing your `player` variable
//and write the return value to the console


//TODO: change the getGreeting() function above
//to include the player's last name as well as first name,
//call it again, and write the return value to the console


/**
 * Increments the `level` property of
 * the player and increases `totalPoints`
 * by 10% times the new level number. For example
 * leveling up from 0 to 1 would award a 10% bonus,
 * while leveling up from 1 to 2 would award
 * a 20% bonus. Use Math.ceil() to round-up the resulting
 * `totalPoints` to the next integer value.
 * Returns the same object that was passed in, so
 * that the caller can chain additional references
 * to the same input object (see usage of this function below).
 * @param {Object} thePlayer 
 * @returns {Object}
 */
function levelUp(thePlayer) {
    //TODO: implement this function
}

//create a new player
let player2 = {
    level: 0,
    totalPoints: 10
}
//pass that player to levelUp().
//we can add the property access expression `.totalPoints` after levelUp() 
//because that function returns the object that was passed into it.
console.log("points after leveling-up: %d", levelUp(player2).totalPoints);

/* FUNCTIONS and ARRAYS */

/**
 * Returns an array of random integers, with length == `amount`,
 * and where each number is between 0 and `max`.
 * The built-in `Math.random()` function will generate
 * a random decimal number between 0 and 1. You need to 
 * make that between 0 and `max`, and then use Math.round()
 * to round the result to the nearest integer
 * @param {number} amount - how many random numbers to generate
 * @param {number} max - the maximum value for each random number
 * @returns {number[]}
 */
function randomIntegers(amount, max) {
    //TODO: implement this function according to the comments above

}

let randomNums = randomIntegers(10, 100);
console.log("random integers:", randomNums);

/**
 * Returns the maximum value from an array of numbers
 * @param {number[]} arrayOfNumbers 
 * @returns {number} - the maximum value
 */
function max(arrayOfNumbers) {
    //TODO: implement this function according to the comments above

}

console.log("the maximum value in %o is %d", randomNums, max(randomNums));

/**
 * Returns a new array with the same number of elements
 * as the `input` array, but with the order of the
 * elements reversed
 * @param {*[]} input 
 * @returns {*[]}
 */
function reverseArray(input) {
    //TODO: implement this function according to the comments    
}

console.log("random integers reversed:", reverseArray(randomNums));

/* SPLITTING and JOINING STRINGS 
Every string has a built-in .split() method that
splits the string into an array of sub-strings based
on a separator. For example, "aa;bb;cc".split(";") will
return an array containing ["aa","bb","cc"]. If you
specify an empty string as the separator, it splits
the string into an array of letters.

Every array has a .join() method, which joins the 
array elements into a string, optionally putting a
separator in between each element. For example, 
["aa","bb","cc"].join(";") returns "aa;bb;cc".
If you specify an empty string as the separator,
it doesn't put anything in between the elements.
*/
//TODO: use .split() and .join() to reverse this string
//remember that you already have a reverseArray() function
let stringToReverse = "stressed";


/* FUNCTIONS CALLING FUNCTIONS */

/**
 * Returns the negation of `num`
 * @param {number} num 
 * @returns {number}
 */
function negate(num) {
    //TODO: implement this function
    
}

/**
 * Returns a new array containing the result
 * of passing each element from arrayOfNumbers
 * through the `negate()` function above.
 * @param {number[]} arrayOfNumbers 
 * @returns {number[]}
 */
function negateArray(arrayOfNumbers) {
    //TODO: implement this function

}

console.log("negated random integers:", negateArray(randomIntegers(10,100)));

/* CONDITIONALS and TRUTHINESS 

JavaScript has two different equality operators:
== and ===. The former will coerce the values on
either side to a common data type if necessary and
then compare them. The latter always returns false
if the two values are not the same type.
*/


//JavaScript will also coerce non-Boolean values used in
//boolean expressions to true/false, using these rules:
// - 0, "", undefined, null, and NaN (not a number) coerce to `false`
// - everything else coerces to `true`


//this coercion happens only when evaluating the boolean
//expression, so you can use this to do some neat tricks:
//default a value using short-circuiting || expression


//JavaScript also has a ternary operator that is like
//an if/else statement all in one operator:
/**
 * Returns the minimum of n1 and n2
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function min(n1, n2) {
    //TODO: use the ? : ternary operator to return the
    //smaller number in just one line of code
}
console.log("min(2,1):", min(2,1));


/* FUNCTIONS ARE VALUES: SORTING 
By default, the .sort() method on arrays will
sort the elements alphabetically (any value can
be converted to a string). If you want to sort
them numerically or some other way, you need to
provide a function that compares two elements.
*/

/**
 * Compares n1 to n2 using these rules:
 * - if n1 is less than n2, return a negative number
 * - if n1 is equal to n2, return zero
 * - if n1 is greater than n2, return a positive number
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function compareNums(n1, n2) {
    //TODO: implement this function
    
}

console.log("compareNums(1,2):", compareNums(1,2));
console.log("compareNums(1,1):", compareNums(1,1));
console.log("compareNums(2,1):", compareNums(1,2));

//some numbers to sort
let numsToSort = [20,1,14,2,21,10,12,11];
console.log("numbers sorted alphabetically:", numsToSort.sort());
//console.log("numbers sorted numerically:", //...TODO:...);

//if you don't need to define the function separately with a name,
//you can alternatively provide an in-line _function value_



/* Note that we passed a _reference to_ our compareNums function
to the .sort() method. We didn't _invoke_ that function using ().
Instead we just used the _name_ of the function, which gives us
a reference to the function itself. This reference is a value,
which means we can use it wherever we can use other kinds of values
(strings, numbers, boolean, etc).

One place we can use values is function parameters, so you can pass 
function references to other functions as parameters. That's what we did
with the .sort() method above. This enables a style of programming
known as "functional programming". We will learn more about that during
our next class.
*/
