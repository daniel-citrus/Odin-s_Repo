import * as zipTools from './zipRegex';

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

function validateCountry(countryCode) {
    if (!zipTools.countryCodeExists(countryCode)) {
        updateValidateMessage('country', 'Please use a valid country.');
        postalInput.classList.add('disabled');
        updateValidateMessage('postal', '');
    } else {
        updateValidateMessage('country', '');
        postalInput.classList.remove('disabled');
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

function buildPasswordWarning(type, content, ...classNames) {
    const element = document.createElement(type);

    classNames.forEach((name) => {
        element.classList.add(name);
    });

    element.textContent = content;

    return element;
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

function validatePassword() {
    const regex =
        /^(?=.+[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/m;

    updateValidateMessage('password', '');
}

function validateConfirmPass() {}

function validateInputs() {}

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
    });

    countryInput.addEventListener('change', () => {
        validateCountry(countryInput.value);
        updateZipExample(countryInput.value);
        postalInput.value = '';
        updateValidateMessage('postal', '');
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        validateInputs();
    });
})();
