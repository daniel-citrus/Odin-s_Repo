const pad = document.querySelector('.sketchPad');
const root = document.documentElement; // For editing CSS root variables
const output = document.getElementById('output');
const rainbowBtn = document.getElementById('rainbow');
const clear = document.querySelector('.clear');
const slider = document.getElementById('rowCount');
const colorPicker = document.getElementById('colorPicker');

let defaultColor = `rgba(0, 0, 0, 1)`;
let rainbow = false; // Random color drawing

colorPicker.addEventListener('change', () => updateColor());
rainbowBtn.addEventListener('click', toggleRainbow);
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
    cell.addEventListener('mousedown', e => draw(e));
    cell.addEventListener('mouseenter', e => draw(e));
    return cell;
}

// Redraw sketchpad and update CSS values
function updateCanvasValues(count) {
    root.style.setProperty(`--cell-row-count`, count);
    output.textContent = `Dimensions: ${count} x ${count}`;
}

function draw(e) {
    if (e.buttons > 0) {
        let hsl = randomColor();
        
        if (rainbow) {
            e.target.style['background-color'] = `${hsl}`;
            e.target.style['border'] = `1px solid ${hsl}`;
        }
        else {
            e.target.style['background-color'] = `${defaultColor}`;
            e.target.style['border'] = `1px solid ${defaultColor}`;
        }
    }
}

// Update pen color when color picker is changed
function updateColor() {
    let value = colorPicker.value;
    
    let r = value.slice(1,3);
    let g = value.slice(3,5);
    let b = value.slice(5,7);

    // convert each value using base 16 number system

    defaultColor = `rgba(${r}, ${g}, ${b}, 1)`;
    console.log(`rgba(${r}, ${g}, ${b}, 1)`);
}

// Returns a randon color in HSL form
function randomColor() {
    return `hsl(${Math.ceil(Math.random() * 359)}, 100%, 51%)`;
}

function toggleRainbow() {
    if (rainbowBtn.classList.contains('active')) {
        rainbowBtn.classList.remove('active');
        rainbow = false;
    }
    else {
        rainbowBtn.classList.add('active');
        rainbow = true;
    }
}

function clearSketchpad() {
    const cells = document.querySelectorAll('.cell');

    if (cells.length === 0) {
        return;
    }

    cells.forEach(cell => {
        cell.style['background-color'] = null;
        cell.style['border'] = null;
    })
}

slider.addEventListener('input', () => {
    let newCount = slider.value;
    let difference = Math.abs(pad.childElementCount - newCount);

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