# Lab 5: AJAX and Promises Lab

Today, you will practice utilizing AJAX and promises. To do this, you will be making API calls to the [Pokeapi](https://pokeapi.co/) and displaying data about a Pokemon of your choice. I have started a JavaScript file for you (`js/index.js`). Place your work for this lab in this file. Here is what your finished product will (roughly) look like:

![Pokemon Website](./img/pokemon.png?raw=true)

## Pick a Pokemon

In the `js/index.js` file, I have created a `const` URL for fetching data about a Pokemon. The URL, however, doesn't work as is. You will need to [replace](https://www.w3schools.com/jsref/jsref_replace.asp) `{name}` with the name of a Pokemon of your choosing. If you don't know the names of any Pokemon, you can find one in the [Pokedex](https://www.pokemon.com/us/pokedex/) or you can just use Pikachu like I did here.

## Display Data about your Pokemon

Once you have picked a Pokemon, `fetch` the data from the API and use the `handleResponse` method to parse the data about your chosen Pokemon. Using the data from the `handleResponse` method, you will render the following:

- An image of your Pokemon
- An unordered list of the type(s) your Pokemon is (Note: Pokemon can have several types)
- An unordered list of the [first 10](https://www.w3schools.com/jsref/jsref_slice_array.asp) moves the Pokemon can learn
- An unordered list of the games the Pokemon appears in that [only](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) start with the letter "s"

All the data you need should be found in the JSON that comes back from your call to `handleResponse`, meaning you shouldn't have to Google this information and/or hard code the values into the HTML. In fact, you shouldn't have to edit the HTML at all.

Rendering this information requires using promises with your `fetch` call. To handle any issues that may occur from this chain of events, be sure to `catch` any errors using the `handleError` method.
