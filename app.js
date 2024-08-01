const container = document.querySelector('.container');
const clear = document.querySelector('#clear');
const border = document.querySelector('#border');
const black = document.querySelector('#black');
const random = document.querySelector('#random');

let mode = '';

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid', 'grid-border');
        container.append(grid)
    }
}

function toggleBorder() {
    let grids = document.querySelectorAll('.grid');

    grids.forEach(function (grid) {
        grid.classList.toggle('grid-border');
    });
}

function UseBlack(e) {
    const grid = e.target.closest('.grid');
    if (!grid) return;

    const blackColor = 'rgb(0, 0, 0)'

    if (mode === 'black') grid.style.setProperty('background-color', blackColor, 'important');
}

function UseRandomColor(e) {
    const grid = e.target.closest('.grid');
    if (!grid) return;
    const value1 = Math.floor((Math.random() * 255));
    const value2 = Math.floor((Math.random() * 255));
    const value3 = Math.floor((Math.random() * 255));

    const randomColor = `rgb(${value1}, ${value2}, ${value3})`;

    if (mode === 'random') grid.style.setProperty('background-color', randomColor, 'important');
}

function clearGrid() {
    container.textContent = '';
    createGrid();
}

function changePen(type) {
    switch (type) {
        case 'black':
            mode = type;
            container.addEventListener('mouseover', UseBlack);
            break;
        case 'random':
            mode = type;
            container.addEventListener('mouseover', UseRandomColor);
            break;
        case 'darken':
            mode = type;
            container.addEventListener('mouseover', Darken);
            break;
        default:
            break;

    }
}

black.addEventListener('click', () => changePen('black'));
random.addEventListener('click', () => changePen('random'));
clear.addEventListener('click', clearGrid);
border.addEventListener('click', toggleBorder);
createGrid();

