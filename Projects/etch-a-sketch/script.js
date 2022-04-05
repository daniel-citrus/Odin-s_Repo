const pad = document.querySelector('.sketchPad');
const root = document.documentElement; // For editing CSS root variables
const output = document.getElementById('output');
const rainbowBtn = document.getElementById('rainbow');
const shadeBtn = document.getElementById('shade');
const lightBtn = document.getElementById('lightener');
const clear = document.querySelector('.clear');
const slider = document.getElementById('rowCount');
const colorPicker = document.getElementById('colorPicker');

let defaultColor = `rgb(0, 0, 0)`;
let rainbow = false;
let shade = false;
let lighten = false;

colorPicker.addEventListener('change', () => updateColor());
rainbowBtn.addEventListener('click', toggleRainbow);
shadeBtn.addEventListener('click', toggleShade);
lightBtn.addEventListener('click', toggleLightener);
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
        if (rainbow) {
            let hsl = randomColor();
            e.target.style['background-color'] = `${hsl}`;
        }
        else if (shade) {
            e.target.style['background-color'] = addShade(e.target.style['background-color']);
        }
        else if (lighten) {
            e.target.style['background-color'] = addLight(e.target.style['background-color']);
        }
        else {
            e.target.style['background-color'] = `${defaultColor}`;
        }

        e.target.style['border'] = `1px solid ${e.target.style['background-color']}`;
    }
}

function addShade(color) {
    if (!color) {
        return `rgb(245,245,245)`;
    }

    color = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',');

    let r = +(color[0].trim()) - 10;
    let g = +(color[1].trim()) - 10;
    let b = +(color[2].trim()) - 10;

    return `rgb(${r},${g},${b})`;
}

function addLight(color) {
    if (!color) {
        return `rgb(255,255,255)`;
    }

    color = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',');

    let r = +(color[0].trim()) + 10;
    let g = +(color[1].trim()) + 10;
    let b = +(color[2].trim()) + 10;

    return `rgb(${r},${g},${b})`;
}

// Update pen color to the current color on the color picker
function updateColor() {
    let value = colorPicker.value;

    let r = value.slice(1, 3);
    let g = value.slice(3, 5);
    let b = value.slice(5, 7);

    r = hexToDecimal(r);
    g = hexToDecimal(g);
    b = hexToDecimal(b);

    // convert each value using base 16 number system
    defaultColor = `rgb(${r}, ${g}, ${b})`;
}

// Convert a 2 digit hexadecimal to a decimal
function hexToDecimal(hex) {
    hex = String(hex);
    let first = 0;
    let second = 0;

    switch (hex[0].toUpperCase()) {
        case 'A':
            first = 10;
            break;
        case 'B':
            first = 11;
            break;
        case 'C':
            first = 12;
            break;
        case 'D':
            first = 13;
            break;
        case 'E':
            first = 14;
            break;
        case 'F':
            first = 15;
            break;
        default: first = +hex[0];
    }

    switch (hex[1].toUpperCase()) {
        case 'A':
            second = 10;
            break;
        case 'B':
            second = 11;
            break;
        case 'C':
            second = 12;
            break;
        case 'D':
            second = 13;
            break;
        case 'E':
            second = 14;
            break;
        case 'F':
            second = 15;
            break;
        default: second = +hex[1];
    }

    return (first * 16) + second;
}

// Returns a randon color in HSL form
function randomColor() {
    return `hsl(${Math.ceil(Math.random() * 359)}, 100%, 51%)`;
}

function toggleShade() {
    if (shadeBtn.classList.contains('active')) {
        shade = false;
        shadeBtn.classList.remove('active');
    }
    else {
        shade = true;
        shadeBtn.classList.add('active');
        rainbow = false;
        rainbowBtn.classList.remove('active');
        lighten = false;
        lightBtn.classList.remove('active');
    }
}

function toggleLightener() {
    if (lightBtn.classList.contains('active')) {
        lighten = false;
        lightBtn.classList.remove('active');
    }
    else {
        lighten = true;
        lightBtn.classList.add('active');
        rainbow = false;
        rainbowBtn.classList.remove('active');
        shade = false;
        shadeBtn.classList.remove('active');
    }
}

function toggleRainbow() {
    if (rainbowBtn.classList.contains('active')) {
        rainbow = false;
        rainbowBtn.classList.remove('active');
    }
    else {
        rainbow = true;
        rainbowBtn.classList.add('active');
        shade = false;
        shadeBtn.classList.remove('active');
        lighten = false;
        lightBtn.classList.remove('active');
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