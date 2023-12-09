import * as zipTools from './zipRegex';
import './style/style.scss';

const submitButton = document.querySelector('form button[type="submit"]');
const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const postalInput = document.getElementById('postal');
const passInput = document.getElementById('password');
const confirmPassInput = document.getElementById('confirmPassword');

function buildCountryOptions() {
    zipTools.getCountryCodes().forEach((countryCode) => {
        if (!zipTools.countryCodeExists(countryCode)) {
            return;
        }

        const option = document.createElement('option');
        option.value = countryCode;
        option.textContent = `${countryCode} - ${zipTools.getCountryName(
            countryCode
        )}`;

        if (countryCode === 'US') {
            option.selected = true;
        }

        countryInput.appendChild(option);
    });
}

/**
 *
 * @param {*} parentContainer - parent div containing the validate div
 * @param {*} message - leaving the message blank will disable the validate message
 */
function updateValidateMessage(parentContainer, message = '') {
    const validateElement = document.querySelector(
        `form .${parentContainer} .validate`
    );

    if (!message) {
        validateElement.classList.remove('flag');
    } else {
        validateElement.classList.add('flag');
    }

    validateElement.textContent = message;
}

function validateEmail() {
    const emailRegex = /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/m;
    let valid = true;

    if (!emailRegex.test(emailInput.value)) {
        updateValidateMessage(
            'email',
            'Please enter a valid email, e.g. bob@gmail.com'
        );
        emailInput.setCustomValidity(
            'Please enter a valid email, e.g. bob@gmail.com'
        );
        valid = false;
    } else {
        updateValidateMessage('email', '');
        emailInput.setCustomValidity('');
    }

    emailInput.reportValidity();
    return valid;
}

/**
 * Updates the Postal Code input placeholder with examples(s) of the given country code
 * @param {*} countryCode
 */
function updateZipExample(countryCode) {
    if (!zipTools.countryCodeExists(countryCode)) {
        postalInput.placeholder = '';
        return false;
    }

    postalInput.placeholder = `e.g. ${zipTools
        .getZipExample(countryCode)
        .toString()
        .replace(',', ' or ')}`;
    return true;
}

function validateCountry() {
    const countryCode = countryInput.value;
    let valid = true;

    if (!zipTools.countryCodeExists(countryCode)) {
        updateValidateMessage('country', 'Please use a valid country.');
        updateValidateMessage('postal', '');
        countryInput.setCustomValidity('Please use a valid country.');
        postalInput.readOnly = true;
        valid = false;
    } else {
        countryInput.setCustomValidity('');
        updateValidateMessage('country', '');
        postalInput.readOnly = false;
    }

    updateZipExample(countryCode);
    return valid;
}

function validatePostal() {
    if (postalInput.classList.contains('disabled')) {
        updateValidateMessage('postal', '');
        countryInput.setCustomValidity('');
        return true;
    }

    const countryCode = countryInput.value;
    const postalCode = postalInput.value;
    let valid = true;

    if (!zipTools.validateZipCode(countryCode, postalCode)) {
        updateValidateMessage(
            'postal',
            `Please enter a valid postal code format e.g. ${zipTools
                .getZipExample(countryCode)
                .toString()
                .replace(',', ' or ')}.`
        );
        postalInput.setCustomValidity(
            `Please enter a valid postal code format e.g. ${zipTools
                .getZipExample(countryCode)
                .toString()
                .replace(',', ' or ')}.`
        );
        valid = false;
    } else {
        postalInput.setCustomValidity('');
        updateValidateMessage('postal', '');
    }

    postalInput.reportValidity();
    return valid;
}

function hasLowerCase(string) {
    const regex = /.*[a-z]{1,}/m;
    return regex.test(string);
}

function hasUpperCase(string) {
    const regex = /.*[A-Z]{1,}/m;
    return regex.test(string);
}

function hasNumber(string) {
    const regex = /.*\d{1,}/m;
    return regex.test(string);
}

function hasSpecialChar(string) {
    const regex = /.*[@$!%*?&]/m;
    return regex.test(string);
}

function validatePassword() {
    const password = passInput.value;
    const passValidate = document.querySelector('form .password .validate');
    const msgLowercase = passValidate.querySelector('.lower');
    const msgUppercase = passValidate.querySelector('.upper');
    const msgNumber = passValidate.querySelector('.number');
    const msgSpecial = passValidate.querySelector('.special');
    const msgTotal = passValidate.querySelector('.length');
    let valid = true;

    if (!hasLowerCase(password)) {
        msgLowercase.classList.remove('valid');
        passInput.setCustomValidity(
            'You password must have a lowercase letter.'
        );
        valid = false;
    } else {
        msgLowercase.classList.add('valid');
    }

    if (!hasUpperCase(password)) {
        msgUppercase.classList.remove('valid');
        passInput.setCustomValidity(
            'You password must have an uppercase letter.'
        );
        valid = false;
    } else {
        msgUppercase.classList.add('valid');
    }

    if (!hasNumber(password)) {
        msgNumber.classList.remove('valid');
        passInput.setCustomValidity('You password must have number.');
        valid = false;
    } else {
        msgNumber.classList.add('valid');
    }

    if (!hasSpecialChar(password)) {
        msgSpecial.classList.remove('valid');
        passInput.setCustomValidity(
            'You password must have a special character.'
        );
        valid = false;
    } else {
        msgSpecial.classList.add('valid');
    }

    if (password.length < 8 || password.length > 20) {
        msgTotal.classList.remove('valid');
        passInput.setCustomValidity(
            'You password must be between 8 to 20 characters.'
        );
        valid = false;
    } else {
        msgTotal.classList.add('valid');
    }

    if (valid) {
        passInput.setCustomValidity('');
    }

    return valid;
}

function validateConfirmPass() {
    const password = passInput.value;
    const confirmPassword = confirmPassInput.value;
    let valid = true;

    if (password === confirmPassword) {
        updateValidateMessage('confirmPassword', '');
    } else {
        updateValidateMessage(
            'confirmPassword',
            'Password confirmation does not match the original password.'
        );
        valid = false;
    }

    return valid;
}

function validateInputs() {
    let valid = true;

    if (!validateEmail()) {
        valid = false;
    }

    if (!validatePostal()) {
        valid = false;
    }

    if (!validatePassword()) {
        valid = false;
    }

    if (!validateConfirmPass()) {
        valid = false;
    }

    return valid;
}

(() => {
    buildCountryOptions();
    updateZipExample('US');

    const inputEventTypes = ['focusout', 'input'];

    inputEventTypes.forEach((inputType) => {
        emailInput.addEventListener(inputType, () => {
            validateEmail();
        });

        postalInput.addEventListener(inputType, () => {
            validatePostal();
        });

        passInput.addEventListener(inputType, () => {
            validatePassword();
        });

        confirmPassInput.addEventListener(inputType, () => {
            validateConfirmPass();
        });
    });

    countryInput.addEventListener('change', () => {
        validateCountry();
        postalInput.value = '';
    });

    submitButton.addEventListener('click', (e) => {
        if (!validateInputs()) {
            e.preventDefault();
            return;
        }
    });
})();
