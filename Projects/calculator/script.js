const backspace = document.getElementById('backspace');
const clearAllButton = document.getElementById('clear');
const clearEntryButton = document.getElementById('clear-entry');
const decimalButton = document.getElementById('decimal');
const entry = document.querySelector('.entry');
const equals = document.getElementById('equals');
const log = document.querySelector('.log');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let leftOperand = null;
let operator = null;
let rightOperand = null;
let clearAllBoxes = false;
let clearEntry = false;     // Clear entry box once during number input
let isDecimal = false;
entry.textContent = '0';


const body = document.querySelector('body');

body.addEventListener('click', () => {
    console.clear();
    console.log(`
    leftOperand: ${leftOperand}\n
    operator: ${operator}\n
    rightOperand: ${rightOperand}\n
    clearAll: ${clearAllBoxes}\n
    clearEntry: ${clearEntry}\n
    isDecimal: ${isDecimal}\n
    `)
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
    clearMemory();
})

// CE
clearEntryButton.addEventListener('click', () => {
    if (clearAllBoxes) {
        clearMemory();
        clearAllBoxes = false;
    }
    else {
        clearEntryBox();
    }
})

// =
equals.addEventListener('click', () => {
    if (leftOperand === null) {
        leftOperand = +entry.textContent;
        displayToLog(leftOperand, '=');
        updateEntryBox(leftOperand);
    }
    else if (!clearEntry) {
        if (leftOperand != null) {
            rightOperand = +entry.textContent;
            let result = solve(leftOperand, rightOperand, operator);

            displayToLog(leftOperand, operator, rightOperand, '=');
            clearEntryBox();
            addToEntry(result);
        }
    }
    else {
        if (rightOperand != null) {
            leftOperand = +entry.textContent;
            let result = solve(leftOperand, rightOperand, operator);
            displayToLog(leftOperand, operator, rightOperand, '=')
            updateEntryBox(result);
        }
        else {
            leftOperand = +entry.textContent;

            displayToLog(leftOperand, '=');
        }
    }

    clearEntry = true;
    clearAllBoxes = true;
})
/* 
// .
decimalButton.addEventListener('click', () => {

    if (isDecimal) {
        return;
    }

    isDecimal = true;

    addToEntry('.');
}) */

// Numbers
for (let button of numberButtons) {
    button.addEventListener('click', (e) => {

        if (clearAllBoxes) {
            clearMemory();
        }

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
        let oldOperator = operator;
        operator = e.target.id;

        if (clearEntry) {
            if (clearAllBoxes) {
                leftOperand = +entry.textContent;
                updateEntryBox(leftOperand);
            }
            displayToLog(leftOperand, operator);
        }
        else {
            if (leftOperand !== null) {
                rightOperand = +entry.textContent;

                let result = solve(leftOperand, rightOperand, oldOperator);

                displayToLog(result, operator);
                updateEntryBox(result);
                leftOperand = result;
            }
            else {
                leftOperand = +entry.textContent;

                displayToLog(leftOperand, operator);
            }
        }

        clearEntry = true;
        clearAllBoxes = false;
    })
}

// Insert numbers to the entry box
function addToEntry(number) {
    if (clearEntry === true) {
        clearEntry = false;
        entry.textContent = '';
    }
    else if (entry.textContent === '0') {
        entry.textContent = '';
    }

    entry.textContent += number;
}

// Clear all expression data and display data
function clearMemory() {
    leftOperand = null;
    operator = null;
    rightOperand = null;
    clearEntry = false;  // Clear entry box once during number input
    clearAllBoxes = false;
    clearEntry = false;
    isDecimal = false;
    clearLog();
    clearEntryBox();
}

function clearEntryBox() {
    entry.textContent = '0';
    isDecimal = false;
}

function clearLog() {
    log.textContent = '';
}

function displayToLog(leftNumber, operator, rightNumber = '', equalSign = '') {
    if (operator === '=') {
        log.innerHTML = `${leftNumber} =`;
    }
    else {
        log.innerHTML = `${leftNumber} ${getOperationSign(operator)} ${rightNumber} ${equalSign}`.trim();
    }
}

function updateEntryBox(input) {
    clearEntryBox();
    entry.textContent = input;
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