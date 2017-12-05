// @ts-check
"use strict";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/{name}/";
const ERROR_ALERT = document.querySelector("#error-alert");

function handleError(err) {
    console.error(err);
    ERROR_ALERT.textContent = err.message;
    ERROR_ALERT.classList.remove("d-none");
}

function handleResponse(response) {
    console.log("got response");
    if (response.ok) {
        return response.json();
    } else {
        return response.text()
            .then(function(message) {
                throw new Error(message);
            });
    }
}
