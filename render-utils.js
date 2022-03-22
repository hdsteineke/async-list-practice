export function renderBird(someBird) {
    const birdEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');
    const colorEl = document.createElement('p');
    const habitatEl = document.createElement('p');
    const wingspanEl = document.createElement('p');

    birdEl.classList.add('bird');

    nameEl.textContent = 'Name: ' + someBird.species;
    imgEl.src = someBird.image;
    colorEl.textContent = 'Color: ' + someBird.color;
    habitatEl.textContent = 'Habitat: ' + someBird.habitat;
    wingspanEl.textContent = 'Wingspan(in.): ' + someBird.wingspan;


    birdEl.append(nameEl, imgEl, colorEl, habitatEl, wingspanEl);

    return birdEl;
}


export function renderPlant(somePlant) {
    const plantEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');
    const nativeEl = document.createElement('p');
    const seasonEl = document.createElement('p');

    plantEl.classList.add('plant');

    nameEl.textContent = 'Name: ' + somePlant.name;
    imgEl.src = somePlant.image;
    nativeEl.textContent = 'PNW Native: ' + somePlant.is_pnw_native;
    seasonEl.textContent = 'Seasons: ' + somePlant.seasons;
        
    plantEl.append(nameEl, imgEl, nativeEl, seasonEl);

    return plantEl;

}