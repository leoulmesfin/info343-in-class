# Lab 3: Fun with JavaScript! 

Today, you're going to flex your JavaScript skills by completing various exercises. Put your work on the `lab.js` file.

## Strings

Create a variable for the string: `I like JavaScript more than I like to party.`

Using the variable, [_only_](https://www.w3schools.com/jsref/jsref_slice_string.asp) print to the console the words `I like to party.`
<br/><br/>

Next, create a variable for the string: `I love Washington State University`. 

Whoops. Looks like we made a huge mistake. [Replace](https://www.w3schools.com/jsref/jsref_replace.asp) the words `Washington State University` with `The University of Washington`. Then, print your new sentence to the console.
<br/><br/>


Finally, [combine](https://www.w3schools.com/jsref/jsref_concat_string.asp) the two sentences into one variable and print the new variable to the console.

## Functions

### Summing Numbers

Write a function named sumUpTo that accepts an integer parameter n and returns the sum of the integers from 1 through n inclusive. For example, sumUpTo(5) returns 15, since 1 + 2 + 3 + 4 + 5 = 15. You may assume that the value of n is at least 1.

### Counting Vowels

Write a function named vowelCount that accepts a string and returns the number of vowels (a, e, i, o, or u) that the string contains.

For example, the call of `vowelCount("kookaburra")` should return 5 (two o's, 2 a's, and one u). When passed a string without any vowels (such as an empty string, "01234", or "sky"), 0 should be returned.


## Arrays

### Find the Smallest Number

Write a function named findMin that accepts an array of numbers as a parameter and returns the smallest number in the array. For example, if an array variable named called nums stored the following values:

`var nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];` 

Then the call of findMin(nums) should return -12.5 since that is the smallest numerical value in the array.

### Find the Longest Word

Write a function named longestWord that accepts an array of Strings and returns the String that has the longest length. If more than one String in the array has the longest length, you the function should return the String that occurs last in the array. If the passed array is empty, the method should return an empty String.

For example, if an array named languages stores the following Strings:

`["Java", "PHP", "JavaScript", "SML", "C", "Python", "Ruby"]`

The call of longestWord(languages) should return JavaScript.

### Remove all Instances of a Word

Write a function named removeAll that accepts an array of Strings and a single String as parameters, and returns a new array. The returned array should be equivalent to the parameter array but with all occurrences of the String parameter removed, ignoring case. The array parameter should remain unchanged as a result of the function call. For example, if an array named words contains `["foo", "bar", "baz", "Foo", "FOO"]`, the call of `removeAll(words, "foo")` should return `["bar", "baz"]`.

## Objects

Create an array of [objects](https://www.w3schools.com/js/js_objects.asp). Each object will keep track of the title of a book, the author of the book, and a boolean for whether or not you have read it. Your array should include:

- _Harry Potter and the Goblet of Fire_ by J.K. Rowling, which you have read
- _The Great Gastby_ by F. Scott Fitzgerald, which you have not read
- _The Hunger Games_ by Suzanne Collins, which you have not read

Next, [add](https://www.w3schools.com/jsref/jsref_push.asp) a new object to the array for the following book: 

- _1984_ by George Orwell, which you have read

Finally, write a function that for each book, prints to the console `"I have read "` followed by the book's title and author if you have read the book (example: `I have read Harry Potter and the Goblet of Fire by J.K. Rowling`), and prints `"I really want to read "` followed by the book's title and author if you have not read the book. 

