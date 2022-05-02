const backspace = document.getElementById('backspace');
const clearAllButton = document.getElementById('clear');
const clearEntryButton = document.getElementById('clear-entry');
const decimalButton = document.getElementById('decimal');
const entry = document.querySelector('.entry');
const equals = document.getElementById('equals');
const functionButtons = document.querySelectorAll('.function');
const log = document.querySelector('.log');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let leftOperand = null;
let operator = null;
let rightOperand = null;
let clearAllBoxes = false;
let clearEntry = false;     // Clear entry box once during number input
let isDecimal = false;
let isError = false;
let functionDisabled = false;
let key = '';
entry.textContent = '0';


const body = document.querySelector('body');

body.addEventListener('click', () => {
    console.clear();
    console.log(`
    Left Operand: ${leftOperand}\n
    Operator: ${operator}\n
    Right Operand: ${rightOperand}\n
    Clear All: ${clearAllBoxes}\n
    Clear Entry: ${clearEntry}\n
    Is a Decimal: ${isDecimal}\n
    Error Occurred: ${isError}\n
    Functions Disabled: ${functionDisabled}\n
    Key Pressed: ${key}\n
    `)
})

// ⌫
backspace.addEventListener('click', () => {
    if (clearAllBoxes) {
        clearLog();
    }
    else {
        let content = entry.textContent;

        if (entry.textContent[content.length - 1] === '.') {
            isDecimal = false;
        }

        entry.textContent = content.slice(0, content.length - 1);

        if (entry.textContent === '') {
            entry.textContent = '0';
        }
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

// .
decimalButton.addEventListener('click', () => {
    if (isDecimal) {
        return;
    }

    if (clearAllBoxes) {
        clearMemory();
        clearAllBoxes = false;
    }

    isDecimal = true;
    addToEntry('.');
})

window.addEventListener('keydown', e => {
    let id = '';

    switch (e.code) {
        case 'Backspace':
            id = 'backspace';
            break;
        case 'Digit0':
        case 'Numpad0':
            id = '0';
            break;
        case 'Digit1':
        case 'Numpad1':
            id = '1';
            break;
        case 'Digit2':
        case 'Numpad2':
            id = '2';
            break;
        case 'Digit3':
        case 'Numpad3':
            id = '3';
            break;
        case 'Digit4':
        case 'Numpad4':
            id = '4';
            break;
        case 'Digit5':
        case 'Numpad5':
            id = '5';
            break;
        case 'Digit6':
        case 'Numpad6':
            id = '6';
            break;
        case 'Digit7':
        case 'Numpad7':
            id = '7';
            break;
        case 'Digit8':
        case 'Numpad8':
            if (e.shiftKey) {
                id = 'multiply';
            }
            else {
                id = '8';
            }
            break;
        case 'Digit9':
        case 'Numpad9':
            id = '9';
            break;
        case 'Enter':
        case 'NumpadEnter':
            id = 'equals';
            break;
        case 'Escape':
            id = 'clear';
            break;
        case 'Equal':
            if (e.shiftKey) {
                id = 'add';
            }
            else {
                id = 'equals';
            }
            break;
        case 'Minus':
        case 'NumpadSubtract':
            id = 'subtract';
            break;
        case 'NumpadAdd':
            id = 'add';
            break;
        case 'NumpadMultiply':
            id = 'multiply';
            break;
        case 'Period':
        case 'NumpadDecimal':
            id = 'decimal';
            break;
        case 'Slash':
        case 'NumpadDivide':
            id = 'divide';
            break;
    }

    key = e.code;

    document.getElementById(id).click();
})

// =
equals.addEventListener('click', () => {
    if (isError) {
        clearMemory();
        return;
    }

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

    isDecimal = false;
    clearEntry = true;
    clearAllBoxes = true;
})

// Numbers
for (let button of numberButtons) {
    button.addEventListener('click', (e) => {

        if (clearAllBoxes) {
            clearMemory();
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
            clearAllBoxes = false;
        }
        else {
            if (leftOperand !== null) {
                rightOperand = +entry.textContent;

                let result = solve(leftOperand, rightOperand, oldOperator);

                if (!isNaN(result)) { // Is a number
                    displayToLog(result, operator);
                    leftOperand = result;
                    clearAllBoxes = false;
                }
                else {
                    toggleCalculatorFunctions('disable');
                    clearAllBoxes = true;
                }

                updateEntryBox(result);
            }
            else {
                leftOperand = +entry.textContent;
                displayToLog(leftOperand, operator);
                clearAllBoxes = false;
            }
        }

        isDecimal = false;
        clearEntry = true;
    })
}

// Insert numbers to the entry box
function addToEntry(input) {
    if (clearEntry === true) {
        if (input === '.') {
            entry.textContent = '0';
        }
        else {
            entry.textContent = '';
        }
        clearEntry = false;
    }
    else {
        if (entry.textContent === '0') {
            if (input === '.') {
                entry.textContent = '0';
            }
            else {
                entry.textContent = '';
            }
        }
    }

    entry.textContent += input;
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
    isError = false;
    toggleCalculatorFunctions('enable');
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
    if (b === 0) {
        isError = true;
        toggleCalculatorFunctions('disable');

        return 'yeet';
    }
    else {
        return a / b;
    }
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

function toggleCalculatorFunctions(toggle) {
    switch (toggle) {
        case 'enable':
            functionDisabled = false;

            for (let item of functionButtons) {
                item.classList.remove('disabled');
            }

            for (let item of operatorButtons) {
                item.classList.remove('disabled');
            }

            break;
        case 'disable':
            functionDisabled = true;

            for (let item of functionButtons) {
                item.classList.add('disabled');
            }

            for (let item of operatorButtons) {
                item.classList.add('disabled');
            }

            break;
    }
}