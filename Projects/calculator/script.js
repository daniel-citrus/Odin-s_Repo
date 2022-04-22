const backspace = document.getElementById('backspace');
const clearAll = document.getElementById('clear');
const clearEntry = document.getElementById('clear-entry');
const entry = document.querySelector('.entry');
const equals = document.getElementById('equals');
const log = document.querySelector('.log');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let leftOperand = null;
let operator = null;
let rightOperand = null;
let clearOnce = false;
entry.textContent = '0';


const body = document.querySelector('body');

body.addEventListener('click', () => {
    console.clear();
    console.log(`
    leftOperand: ${leftOperand}\n
    operator: ${operator}\n
    rightOperand: ${rightOperand}\n
    clearOnce: ${clearOnce}\n
    `)
})

backspace.addEventListener('click', () => {
    let content = entry.textContent;

    entry.textContent = content.slice(0, content.length - 1);

    if (entry.textContent === '') {
        entry.textContent = '0';
    }
})

clearAll.addEventListener('click', () => {
    clearEntryBox();

    leftOperand = null;
    operator = null;
    clearOnce = false;

    log.textContent = '';
})

clearEntry.addEventListener('click', () => {
    clearEntryBox()
})

equals.addEventListener('click', () => {
    let solution = 0;

    if (clearOnce === true && operator !== null) {
        leftOperand = +entry.textContent;
        solution = solve(leftOperand, rightOperand, operator);
        entry.textContent = solution;
    }
    else if (operator === null) {
        displayToLog(rightOperand, '=');
    }
    else {
        rightOperand = +entry.textContent;
        solution = solve(leftOperand, rightOperand, operator);
        displayToLog(leftOperand, getOperationSign(operator), rightOperand, '=');
        entry.textContent = solution;
    }

    clearOnce = true;
})

// Numbers
for (let button of numberButtons) {
    button.addEventListener('click', (e) => {
        addToEntry(e.target.id);
    })
}

// Operators
for (let button of operatorButtons) {
    button.addEventListener('click', (e) => {
        let sign = getOperationSign(e.target.id);
        operator = e.target.id;
        leftOperand = +entry.textContent;
        clearOnce = true;

        displayToLog(leftOperand, sign);
    })
}

// Insert numbers to the entry box
function addToEntry(digit) {
    if (clearOnce === true) {
        clearOnce = false;
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