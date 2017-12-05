"use strict";

/**
 * byNumber is a sort comparator function that
 * returns positive if n1 > n2, negative if
 * n1 < n2, or zero if they are equal.
 * @param {number} n1 
 * @param {number} n2 
 */
function byNumber(n1, n2) {
    return n1 - n2;
}

/**
 * descending returns a comparator function
 * that negates the value returned from 
 * comparator()
 * @param {function(*,*): number} comparator 
 * @returns {function(*,*): number}
 */
function descending(comparator) {
    return function(elem1, elem2) {
        return -(comparator(elem1, elem2));
    };
}

/**
 * max returns the maximum number from
 * an array of numbers. If the array is
 * empty, it returns undefined.
 * @param {number[]} arrayOfNumbers 
 * @returns {number}
 */
function max(arrayOfNumbers) {
    //TODO: write unit tests for this code and 
    //discover the bug!
    let max = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        max = arrayOfNumbers[i] > max ? arrayOfNumbers[i] : max;
    }
    return max;
}

/**
 * getGreeting returns a greeting for `name`
 * @param {string} name 
 * @returns {string}
 */
function getGreeting(name) {
    //TODO: write unit tests for this code and
    //discover the bug!
    if (!name) {
        let name = "World";
    }
    return "Hello, " + name + "!"
}

/**
 * @typedef {Object} Movie
 * @property {string} title - title of the movie
 * @property {string} released - release date in YYYY-MM-DD format
 */

/**
 * getCitation returns a citation for the movie
 * in the form of "<title> (<year>)", where 
 * <title> is the movie.title property, and <year>
 * is just the year portion of the movie.released
 * property. If movie.released is undefined or null,
 * omit the entire " (<year>)" portion and only return
 * the title. If the title is missing, replace with the
 * literal string "(no title)".
 * @param {Movie} movie - a movie object with the
 * properties listed in the typedef above.
 * @returns {string} - the citation
 */
function getCitation(movie) {
    //TODO: implement this function
    //and write exhaustive automated tests
    //to verify that it's working correctly

}



/* EXPORTS (don't modify this)
This code exports the functions above so that 
the Jest testing framework can import and
execute them. Jest runs at the command line,
so it runs under Node.js, and Node.js adds
the `module` global variable when it runs
your JavaScript (similar to how the browser
adds `document` and `window`). If there is a
global named `module`, this code adds an `exports`
property set to another object. The keys of
that object are function names, and the values
are references to those functions. We do this
only when `module` is defined so that this code
doesn't break when it's loaded into the browser
(where there is no `module` variable).
*/
if (module) {
    module.exports = {
        byNumber: byNumber,
        max: max,
        getGreeting: getGreeting,
        getCitation: getCitation
    };
}
