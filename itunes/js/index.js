// @ts-check
"use strict";

//iTunes Search API
//`entity=music` filters for just music tracks and music videos
//`term=...` is how you specify the search term
const SEARCH_API = "https://itunes.apple.com/search?entity=musicTrack&term="

//a few elements we will need to adjust often
const PROGRESS_BAR = document.querySelector(".progress");
const RESULTS_DIV = document.querySelector("#results");

//Audio object to play track previews
let preview = new Audio();

/**
 * Handles responses from the fetch() API.
 * The iTunes API always returns JSON, even for
 * status codes >= 400.
 * @param {Response} response 
 */
function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        //iTunes API errors are sent
        //as a JSON object containing
        //an `errorMessage` property
        return response.json()
            .then(function(err) {
                throw new Error(err.errorMessage);
            });
    }
}

/**
 * Handles errors that occur while fetching
 * @param {Error} err 
 */
function handleError(err) {
    console.error(err);
    alert(err);
}

/**
 * Renders the iTunes search API results
 * @param {Object} data 
 */
function renderResults(data) {
    //TODO: implement this
}

//TODO: listen for the "submit" event
//raised by the <form id="search-form">
//element, prevent the default behavior,
//and use fetch() to search iTunes for tracks
//matching the term the user entered in the
//<input> element within the form.
