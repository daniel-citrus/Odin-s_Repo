const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNumber');

fname.addEventListener('change', () => {
    validateName(fname);
});

fname.addEventListener('keyup', () => {
    validateName(fname);
});

lname.addEventListener('change', () => {
    validateName(lname);
});

lname.addEventListener('keyup', () => {
    validateName(lname);
});

email.addEventListener('change', () => {
    validateEmail(email);
});

email.addEventListener('keyup', () => {
    validateEmail(email);
});

phone.addEventListener('change', () => {
    validatePhone(phone);
})

phone.addEventListener('keyup', () => {
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

function validatePhone(obj) {
    let value = obj.value;
    let message = '';

    if (/^[\(]?\d{3}[\)]?[ ]?\d{3}[\-]?\d{4}$/.test(value) || value === '') {
        message = '';
    }
    else {
        message = 'Please enter a valid phone number';
    }

    updateValidity(obj, message);
}

function updateValidity(element, message) {
    element.setCustomValidity(message);
}