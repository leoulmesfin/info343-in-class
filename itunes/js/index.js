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
    console.log(data);
    RESULTS_DIV.textContent = "";
    data.results.forEach(function(track) {
        let img = document.createElement("img");
        img.src = track.artworkUrl100;
        img.alt = track.trackName;
        img.title = track.trackName;
        RESULTS_DIV.appendChild(img);

        img.addEventListener("click", function() {
            if (preview.src === track.previewUrl) {
                //clicked on same track as before
                if(preview.paused) {
                    //currently paused, so play
                    preview.play();
                } else {
                    //currently playing, but want to pause
                    preview.pause();
                }
            } else {
                //clicked on a new track
                preview.src = track.previewUrl;
                preview.play();
            }
        });
    });
}

//TODO: listen for the "submit" event
//raised by the <form id="search-form">
//element, prevent the default behavior,
//and use fetch() to search iTunes for tracks
//matching the term the user entered in the
//<input> element within the form.
document.querySelector("#search-form")
    .addEventListener("submit", function(evt) {
        evt.preventDefault();
        
        //'this' refers to the element that raised the event, which
        //in this case is the <form> element
        let term = this.querySelector("input").value;
        console.log("searching for %s", term);

        fetch(SEARCH_API + term)
            .then(handleResponse)
            .then(renderResults)
            .catch(handleError);
    });