const pad = document.querySelector('.sketchPad');
const clear = document.querySelector('.clear');
const root = document.documentElement; // For editing CSS root variables
const output = document.getElementById('output');
const slider = document.getElementById('rowCount');

clear.addEventListener('click', clearSketchpad);

window.addEventListener('DOMContentLoaded', () => {
    drawPad(20);
    updateCanvasValues(20);
})

// Generate sketchpad
function drawPad(count) {
    for (let i = 0; i < count; i++) {
        const cellRow = createRow();

        for (let j = 0; j < count; j++) {
            cellRow.appendChild(createCell());
        }

        pad.appendChild(cellRow);
    }
}

function createRow() {
    const cellRow = document.createElement('div');
    cellRow.classList.add('cell-row');
    return cellRow;
}

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', e => drawOn(e));
    return cell;
}

// Redraw sketchpad and update CSS values
function updateCanvasValues(count) {
    root.style.setProperty(`--cell-row-count`, count);
    output.textContent = `Dimensions: ${count} x ${count}`;
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

/*
slider.addEventListener('input', () => {
    while (pad.firstChild) {
        pad.removeChild(pad.firstElementChild);
    }
    drawPad(slider.value);
    updateCanvasValues(slider.value);
})
*/

slider.addEventListener('input', () => {
    let newCount = slider.value;
    let difference = Math.abs(pad.childElementCount - newCount);

    console.log(`newCount: ${newCount}, current:${pad.childElementCount}, differece: ${difference}`);
    if (newCount < pad.childElementCount) {
        shrinkPad(difference);
    }
    else if (newCount > pad.childElementCount) {
        growPad(difference, newCount);
    }

    clearSketchpad();
    updateCanvasValues(newCount);
})

// Shrink the height and width of the sketchpad
function shrinkPad(increaseBy) {
    //Remove rows
    for (let i = 0; i < increaseBy; i++) {
        pad.removeChild(pad.firstElementChild);
    }

    // Remove cells
    const rows = pad.querySelectorAll('.sketchPad .cell-row');

    for (let row of rows) {
        for (let i = 0; i < increaseBy; i++) {
            row.removeChild(row.firstElementChild);
        }
    }
}

// Grow the height and width of the sketchpad
function growPad(increaseBy, newLength) {
    const rows = document.querySelectorAll('.cell-row');
    for (const row of rows) {
        for (let i = 0; i < increaseBy; i++) {
            row.appendChild(createCell());
        }
    }

    for (let j = 0; j < increaseBy; j++) {
        const newRow = createRow();

        for (let k = 0; k < newLength; k++) {
            newRow.appendChild(createCell());
        }

        pad.appendChild(newRow);
    }
}