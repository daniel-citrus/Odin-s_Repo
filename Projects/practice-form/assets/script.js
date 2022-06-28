const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNumber');

fname.addEventListener('keyup', () => {
    validateName(fname);
});

lname.addEventListener('keyup', () => {
    validateName(lname);
});

email.addEventListener('keyup', () => {
    validateEmail(email);
});

function validateName(obj) {
    let value = obj.value;

    if (hasNumber(value)) {
        updateValidity(obj, 'Contains a number');
    }
    else if (hasInvalidSymbol(value)) {
        updateValidity(obj, 'Contains an invalid character');
    }
    else {
        updateValidity(obj, '');
    }
}

function validateEmail(obj) {
    let value = obj.value;

    if (obj.validity.typeMismatch) {
        updateValidity(obj, 'Please enter an email address');
    }
    else if (hasInvalidSymbol(value, true)) {
        updateValidity(obj, 'Contains an invalid character');
    }
    else {
        updateValidity(obj, '');
    }
}

function hasInvalidSymbol(v, isEmail = false) {
    if (isEmail) {
        return /[`!#$%^&*()_+\=\[\]{};:"\\|,<>\/?~]/.test(v);
    }
    else {
        return /[`!#$%^&*()_+\=\[\]{};:"\\|,<>\/?~]/.test(v);
    }
}

function hasNumber(v) {
    return /[0-9]/.test(v);
}

function updateValidity(element, message) {
    element.setCustomValidity(message);
}