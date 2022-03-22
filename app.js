// import functions and grab DOM elements
import { renderBird } from './render-utils.js';
import { getBirds } from './fetch-utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const birdContainerEl = document.querySelector('#bird-container');

window.addEventListener('load', async () => {
    fetchAndDisplayBirds();
  
});

async function fetchAndDisplayBirds() {

    const birds = await getBirds();

    for (let bird of birds) {
        const birdEl = renderBird(bird);

        birdContainerEl.append(birdEl);

    }
}
