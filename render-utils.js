export function renderBird(someBird) {
    const birdEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');
    const colorEl = document.createElement('p');
    const habitatEl = document.createElement('p');
    const wingspanEl = document.createElement('p');

    birdEl.classList.add('bird');

    nameEl.textContent = someBird.species;
    imgEl.src = someBird.image;
    colorEl.textContent = someBird.color;
    habitatEl.textContent = someBird.habitat;
    wingspanEl.textContent = someBird.wingspan;


    birdEl.append(nameEl, imgEl, colorEl, habitatEl, wingspanEl);

    return birdEl;
}