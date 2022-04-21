let backspace = document.getElementById('backspace');
let clearAll = document.getElementById('clear');
let clearEntry = document.getElementById('clear-entry');
let entry = document.querySelector('.entry');
let log = document.querySelector('.log');
let numberButtons = document.querySelectorAll('.number');


log.textContent = '12345';
entry.textContent = '542342';

backspace.addEventListener('click', () => {
    let content = entry.textContent;

    entry.textContent = content.slice(0, content.length - 1);

    if (entry.textContent === '') {
        entry.textContent = '0';
    }
})

clearAll.addEventListener('click', () => {
    entry.textContent = '0';
    log.textContent = '';
})

clearEntry.addEventListener('click', () => {
    entry.textContent = '0';
})

for (let button of numberButtons) {
    button.addEventListener('click', () => {
        if (entry.textContent == '0') {
            entry.textContent = '';
        }
        
        entry.textContent = entry.textContent + button.id;
    })
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