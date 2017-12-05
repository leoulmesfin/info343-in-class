# Lab 4: CSS Animations - DOM Manipulation Edition

Two weeks ago, Dr. Stearns showed you how to implement animations using CSS, and trigger the effects by hovering. Today, you are going to build on this knowledge and start the animations utilizing DOM manipulation! 

I have started a JavaScript file for you (`js/index.js`). You will be putting most of your work here. The animations are already defined in the `css/index.css` file. Use the [element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) property to trigger these effects.

Throughout this exericse, you will need to use various [mouse events](https://www.w3schools.com/jsref/dom_obj_event.asp). To use these, do not include the "on" prefix (for example, use *click* instead of *onclick*).

## Box 1
- On click, the first box should spin

![Spin animation](./img/spin.gif?raw=true)

## Box 2
- On mouse over, the background color of the second box should fade to white and then remain white while your cursor is on the box
- On mouse out, the background color should fade back to the original background color (red) and remain red 

![Fade animation](./img/fade.gif?raw=true)

## Box 3
- On **double click**, box number three should explode

![Explode animation](./img/explode.gif?raw=true)

## Box 4
- The fourth box should toggle between two positions. On the first click, the box should fall down and remain in its fallen position
- On the next click, the box shoud float back to its original position

![Drop animation](./img/drop.gif?raw=true)

## Box 5
- On mouse over, the fifth box should shake and its background color should change from red to black

![Shake animation](./img/shake.gif?raw=true)

## Box 6
- Box 6 is for you to utilize your creativity and imagination. Make your own animation/transition and trigger the effect with any event listener you'd like! 