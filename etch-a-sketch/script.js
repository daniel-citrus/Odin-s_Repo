const pad = document.querySelector('.sketch-pad');
const clear = document.querySelector('.clear');

clear.addEventListener('click', clearSketchpad);

// Generate sketchpad
for (let i = 0; i < 100; i++) {
    const cellRow = document.createElement('div');
    cellRow.classList.add('cell-row');

    for (let j = 0; j < 100; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', (e) => {
            drawOn(e);
        })
        cellRow.appendChild(cell);
    }

    pad.appendChild(cellRow);
}

function drawOn(e) {
    e.target.classList.add('drawed');
}

function clearSketchpad() {
    const cells = document.querySelectorAll('.cell');

    if (cells.length === 0) {
        return;
    }

    cells.forEach(cell => {
        cell.style['background-color'] = 'white';
    })
}