const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNumber');

fname.addEventListener('change', () => {
    validateName(fname);
});

lname.addEventListener('change', () => {
    validateName(lname);
});

email.addEventListener('change', () => {
    validateEmail(email);
});

phone.addEventListener('change', () => {
    validatePhone(phone);
})

function validateName(obj) {
    let value = obj.value;
    let message = '';

    if (hasNumber(value)) {
        message = 'Contains a number';
    }
    else if (hasInvalidSymbol(value)) {
        message = 'Contains an invalid character';
    }
    else {
        message = '';
    }

    updateValidity(obj, message);
}

function validateEmail(obj) {
    let value = obj.value;
    let message = '';

    if (obj.validity.typeMismatch) {
        message = 'Please enter an email address';
    }
    else if (hasInvalidSymbol(value, true)) {
        message = 'Contains an invalid character';
    }
    else {
        message = '';
    }

    updateValidity(obj, message);
}

function validatePhone(obj) {
    if(/[\(]?\d{3}[\)]?\d{3}[\-]?\d{4}/.test(obj)) {
        updateValidity(obj, '');
    }
    else {
        updateValidity(obj, 'Please enter a valid phone number');
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