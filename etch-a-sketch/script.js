const pad = document.querySelector('.sketchPad');
const clear = document.querySelector('.clear');
const root = document.documentElement; // For editing CSS root variables

clear.addEventListener('click', clearSketchpad);

window.addEventListener('DOMContentLoaded', () => {
    root.style.setProperty(`--cell-row-count`, 20);
    drawPad(20);
})

// Generate sketchpad
function drawPad(count) {
    for (let i = 0; i < count; i++) {
        const cellRow = document.createElement('div');
        cellRow.classList.add('cell-row');

        for (let j = 0; j < count; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', e => drawOn(e));
            cellRow.appendChild(cell);
        }

        pad.appendChild(cellRow);
    }
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
        cell.classList.remove('drawed');
    })
}