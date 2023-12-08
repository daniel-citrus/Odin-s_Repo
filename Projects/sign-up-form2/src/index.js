import * as zipTools from './zipRegex';
import './style/style.scss';

const submitButton = document.querySelector('form button[type="button"]');
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

    if (!emailRegex.test(emailInput.value)) {
        updateValidateMessage(
            'email',
            'Please enter a valid email, e.g. bob@gmail.com'
        );
    } else {
        updateValidateMessage('email', '');
    }
}

/**
 * Updates the Postal Code input placeholder with examples(s) of the given country code
 * @param {*} countryCode
 */
function updateZipExample(countryCode) {
    if (zipTools.countryCodeExists(countryCode)) {
        postalInput.placeholder = `e.g. ${zipTools
            .getZipExample(countryCode)
            .toString()
            .replace(',', ' or ')}`;
    } else {
        postalInput.placeholder = '';
    }
}

function validateCountry() {
    const countryCode = countryInput.value;

    if (!zipTools.countryCodeExists(countryCode)) {
        updateValidateMessage('country', 'Please use a valid country.');
        updateValidateMessage('postal', '');
        postalInput.readOnly = true;
    } else {
        updateValidateMessage('country', '');
        postalInput.readOnly = false;
    }

    updateZipExample(countryCode);
}

function validatePostal() {
    if (postalInput.classList.contains('disabled')) {
        updateValidateMessage('postal', '');
        return;
    }

    const countryCode = countryInput.value;
    const postalCode = postalInput.value;

    if (!zipTools.validateZipCode(countryCode, postalCode)) {
        updateValidateMessage(
            'postal',
            `Please enter a valid postal code format e.g. ${zipTools
                .getZipExample(countryCode)
                .toString()
                .replace(',', ' or ')}.`
        );
    } else {
        updateValidateMessage('postal', '');
    }
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

    if (!hasLowerCase(password)) {
        msgLowercase.classList.remove('valid');
    } else {
        msgLowercase.classList.add('valid');
    }

    if (!hasUpperCase(password)) {
        msgUppercase.classList.remove('valid');
    } else {
        msgUppercase.classList.add('valid');
    }

    if (!hasNumber(password)) {
        msgNumber.classList.remove('valid');
    } else {
        msgNumber.classList.add('valid');
    }

    if (!hasSpecialChar(password)) {
        msgSpecial.classList.remove('valid');
    } else {
        msgSpecial.classList.add('valid');
    }

    if (password.length < 8 || password.length > 20) {
        msgTotal.classList.remove('valid');
    } else {
        msgTotal.classList.add('valid');
    }
}

function validateConfirmPass() {
    const password = passInput.value;
    const confirmPassword = confirmPassInput.value;

    if (password === confirmPassword) {
        updateValidateMessage('confirmPassword', '');
    } else {
        updateValidateMessage(
            'confirmPassword',
            'Password confirmation does not match the original password.'
        );
    }
}

function validateInputs() {
    if (
        !validateEmail() ||
        !validatePostal() ||
        !validatePassword() ||
        !validateConfirmPass()
    ) {
        return false;
    }

    return true;
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
        e.preventDefault();
        validateInputs();
    });
})();
