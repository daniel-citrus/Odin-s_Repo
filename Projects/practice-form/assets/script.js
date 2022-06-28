const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phone = document.getElementById('phoneNumber');

fname.addEventListener('keyup', () => {
    validate(fname);
});

lname.addEventListener('keyup', () => {
    validate(lname);
});



function validate(obj) {
    let value = obj.value;

    if (hasInvalidSymbol(value)) {
        updateValidity(obj, 'Contains an invalid character');
    }
    else if (hasNumber(value)) {
        updateValidity(obj, 'Contains a number');
    }
    else {
        updateValidity(obj, '');
    }
}

function hasInvalidSymbol(v) {
    return /[`!@#$%^&*()_+\=\[\]{};:"\\|,<>\/?~]/.test(v);
}

function hasNumber(v) {
    return /[0-9]/.test(v);
}

function updateValidity(element, message) {
    element.setCustomValidity(message);
}