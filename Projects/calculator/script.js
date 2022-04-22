const backspace = document.getElementById('backspace');
const clearAll = document.getElementById('clear');
const clearEntry = document.getElementById('clear-entry');
const entry = document.querySelector('.entry');
const log = document.querySelector('.log');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let left_operand = null;
let left_operand_ready = false; // True when operator is selected
let operator = null;
let right_operand = null;

const body = document.querySelector('body');
body.addEventListener('click', () => {
    console.clear();
    console.log(`left_operand: ${left_operand}\noperator: ${operator}\nright_operand: ${right_operand}\n\nleft_operand_ready:${left_operand_ready}`);
})

entry.textContent = '0';

backspace.addEventListener('click', () => {
    let content = entry.textContent;

    entry.textContent = content.slice(0, content.length - 1);

    if (entry.textContent === '') {
        entry.textContent = '0';
    }
})

clearAll.addEventListener('click', () => {
    clearEntryBox();
    log.textContent = '';

    left_operand = null;
    left_operand_ready = false;
    operator = null;
    right_operand = null;
})

clearEntry.addEventListener('click', () => {
    clearEntryBox()

    right_operand = null;
})

// Numbers
for (let button of numberButtons) {
    button.addEventListener('click', () => {
        if (entry.textContent == '0') {
            entry.textContent = '';
        }
        else if (left_operand_ready) {
            entry.textContent = '';
            left_operand_ready = false;
        }

        entry.textContent = entry.textContent + button.id;
    })
}

// Operators
for (let button of operatorButtons) {
    button.addEventListener('click', (e) => {
        let sign = '';

        switch (e.target.id) {
            case 'add':
                sign = '+';
                break;
            case 'subtract':
                sign = '-';
                break;
            case 'multiply':
                sign = '&times;';
                break;
            case 'divide':
                sign = '&#xF7;';
                break;
        }

        left_operand = +entry.textContent;
        operator = e.target.id;
        left_operand_ready = true;

        log.innerHTML = `${left_operand} ${sign}`;
    })
}

function clearEntryBox() {
    entry.textContent = '0';
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

function operate(a, b, operator) {

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