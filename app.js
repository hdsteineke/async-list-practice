// import functions and grab DOM elements
import { renderBird } from './render-utils.js';
import { getBirds } from './fetch-utils.js';

import { renderPlant } from './render-utils.js';
import { getPlants } from './fetch-utils.js';

import { renderSnack } from './render-utils.js';
import { getSnacks } from './fetch-utils.js';

import { renderBook } from './render-utils.js';
import { getBooks } from './fetch-utils.js';


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const birdContainerEl = document.querySelector('#bird-container');

window.addEventListener('load', async () => {
    fetchAndDisplayBirds();
    fetchAndDisplayPlants();
    fetchAndDisplaySnacks();
    fetchAndDisplayBooks();
});

async function fetchAndDisplayBirds() {

    const birds = await getBirds();

    for (let bird of birds) {
        const birdEl = renderBird(bird);

        birdContainerEl.append(birdEl);

    }
}

const plantContainerEl = document.querySelector('#plant-container');

async function fetchAndDisplayPlants() {
    const plants = await getPlants();

    for (let plant of plants) {
        const plantEl = renderPlant(plant);

        plantContainerEl.append(plantEl);
    }
}

const snackContainerEl = document.querySelector('#snack-container');

async function fetchAndDisplaySnacks() {
    const snacks = await getSnacks();

    for (let snack of snacks) {
        const snackEl = renderSnack(snack);

        snackContainerEl.append(snackEl);
    }
}

const bookContainerEl = document.querySelector('#book-container');

async function fetchAndDisplayBooks() {
    const books = await getBooks();

    for (let book of books) {
        const bookEl = renderBook(book);

        bookContainerEl.append(bookEl);
    }
}