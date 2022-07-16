let password = document.getElementById('pwd');
let passwordConfirm = document.getElementById('pwdconfirm');
let passwordSpan = password.nextElementSibling;
let passwordConfirmSpan = passwordConfirm.nextElementSibling;
let phone = document.getElementById('phone');
let phoneSpan = phone.nextElementSibling;
let pwdReqUppercase = document.getElementById('pwd-uppercase');
let pwdReqLowercase = document.getElementById('pwd-lowercase');
let pwdReqNumber = document.getElementById('pwd-number');
let pwdReqSymbol = document.getElementById('pwd-symbol');
let pwdReqLength = document.getElementById('pwd-length');

password.addEventListener('keyup', (e) => {
    checkPassword();
    checkPasswordMatch();
});

passwordConfirm.addEventListener('keyup', () => {
    checkPasswordMatch();
});

phone.addEventListener('keydown', (e) => {
    if (e.key !== 'Backspace') {
        formatPhone();
    }
});

phone.addEventListener('keyup', (e) => {
    errorCheckPhone();
});

function errorCheckPhone() {
    if (phone.validity.patternMismatch) {
        phoneSpan.textContent = '* Please enter a valid phone number';
        phone.setCustomValidity('Please enter a valid phone number');
    }
    else {
        phoneSpan.textContent = '';
        phone.setCustomValidity('');
    }
}

function formatPhone() {
    let length = phone.value.length;

    if (length === 3 || length === 7) {
        phone.value += '-';
    }
}

/* Check for each requirement and add class 'valid' to <li> if requirement is met */
function checkPassword() {
    let value = password.value;
    let uppcaseTest = /[A-Z]/;
    let lowercaseTest = /[a-z]/;
    let numberTest = /[0-9]/;
    let symbolsTest = /[~!@#$%&*_]/;
    let minLength = 8;

    /* Uppercase */
    if (uppcaseTest.test(value)) {
        pwdReqUppercase.classList.add('valid');
    }
    else {
        pwdReqUppercase.classList.remove('valid');
    }

    /* Lowercase */
    if (lowercaseTest.test(value)) {
        pwdReqLowercase.classList.add('valid');
    }
    else {
        pwdReqLowercase.classList.remove('valid');
    }

    /* Number */
    if (numberTest.test(value)) {
        pwdReqNumber.classList.add('valid');
    }
    else {
        pwdReqNumber.classList.remove('valid');
    }

    /* Symbol */
    if (symbolsTest.test(value)) {
        pwdReqSymbol.classList.add('valid');
    }
    else {
        pwdReqSymbol.classList.remove('valid');
    }

    if (value.length >= minLength) {
        pwdReqLength.classList.add('valid');
    }
    else {
        pwdReqLength.classList.remove('valid');
    }
}

function checkPasswordMatch() {
    if (password.value === passwordConfirm.value) {
        passwordConfirm.setCustomValidity('');
        passwordConfirmSpan.textContent = ('');
    }
    else {
        passwordConfirm.setCustomValidity('Passwords do not match');
        passwordConfirmSpan.textContent = ('* Passwords do not match');
    }
}