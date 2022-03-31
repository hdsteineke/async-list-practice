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

export function renderSnack(someSnack) {
    const snackEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const colorEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const veganEl = document.createElement('p');

    snackEl.classList.add('snack');

    nameEl.textContent = 'Name: ' + someSnack.name;
    colorEl.textContent = 'Color: ' + someSnack.color;
    priceEl.textContent = 'Price: $' + someSnack.price;
    veganEl.textContent = 'Vegan: ' + someSnack.is_vegan;

    snackEl.append(nameEl, colorEl, priceEl, veganEl);

    return snackEl;
}

export function renderBook(someBook) {
    const bookEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const genreEl = document.createElement('p');
    const chapterEl = document.createElement('p');
    const copiesEl = document.createElement('p');

    bookEl.classList.add('book');

    titleEl.textContent = 'Title: ' + someBook.title;
    genreEl.textContent = 'Genre: ' + someBook.genre;
    chapterEl.textContent = 'Chapterbook:' + someBook.is_chapterbook;
    copiesEl.textContent = 'Copies sold: ' + someBook.copies_sold;

    bookEl.append(titleEl, genreEl, chapterEl, copiesEl);

    return bookEl;
}