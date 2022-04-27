const backspace = document.getElementById('backspace');
const clearAllButton = document.getElementById('clear');
const clearEntryButton = document.getElementById('clear-entry');
const entry = document.querySelector('.entry');
const equals = document.getElementById('equals');
const log = document.querySelector('.log');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let leftOperand = null;
let operator = null;
let rightOperand = null;
let previousResult = null;
let clearEntry = false;  // Clear entry box once during number input
let clearAllBoxes = false;
entry.textContent = '0';


const body = document.querySelector('body');

body.addEventListener('click', () => {
    console.clear();
    console.log(`
    leftOperand: ${leftOperand}\n
    operator: ${operator}\n
    rightOperand: ${rightOperand}\n
    previousResult: ${previousResult}\n
    clearEntry: ${clearEntry}\n
    clearAll: ${clearAllBoxes}\n`)
})

// ⌫
backspace.addEventListener('click', () => {
    let content = entry.textContent;

    entry.textContent = content.slice(0, content.length - 1);

    if (entry.textContent === '') {
        entry.textContent = '0';
    }
})

// C
clearAllButton.addEventListener('click', () => {
    clearEntryBox();

    leftOperand = null;
    operator = null;
    rightOperand = null;
    clearEntry = false;
    clearAllBoxes = false;
    previousResult = null;

    log.textContent = '';
})

// CE
clearEntryButton.addEventListener('click', () => {
    clearEntryBox();
})

// =
equals.addEventListener('click', () => {
    if (leftOperand === null) {
        displayToLog('0','=');
    }
    else if (clearEntry) {
        displayToLog(leftOperand, '=');
        clearEntry = false;
    }
    else {
        rightOperand = +entry.textContent;
        previousResult = solve(leftOperand, rightOperand, operator);

        let symbol = getOperationSign(operator);

        displayToLog(leftOperand, symbol, rightOperand, '=');
        clearEntryBox();
        addToEntry(previousResult);
    }

    clearAllBoxes = true;
})

// Numbers
for (let button of numberButtons) {
    button.addEventListener('click', (e) => {
        if (clearEntry) {
            clearEntryBox();
            clearEntry = false;
        }

        addToEntry(e.target.id);
    })
}

// Operators
for (let button of operatorButtons) {
    button.addEventListener('click', (e) => {
        /* let sign = getOperationSign(e.target.id);
        operator = e.target.id; // for display
        leftOperand = +entry.textContent;
        clearEntry = true;

        displayToLog(leftOperand, sign); */
        if (leftOperand === null) {
            leftOperand = +entry.textContent;
            operator = e.target.id;
            clearEntry = true;
        }
    })
}

// Insert numbers to the entry box
function addToEntry(digit) {
    if (clearEntry === true) {
        clearEntry = false;
        entry.textContent = '';
    }
    else if (entry.textContent === '0') {
        entry.textContent = '';
    }

    entry.textContent += digit;
}

function clearEntryBox() {
    entry.textContent = '0';
}

function displayToLog(number, operator, anotherNumber = '', equalSign = '') {
    log.innerHTML = `${number} ${operator} ${anotherNumber} ${equalSign}`.trim();
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Converts operation keywords to signs (add -> +)
function getOperationSign(sign) {
    switch (sign) {
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return '&times;';
        case 'divide':
            return '&#xF7;';
        default:
            console.log('No sign available.');
    }
}

function solve(a, b, operator) {
    let result = 0;

    switch (operator) {
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
    }

    return result;
}