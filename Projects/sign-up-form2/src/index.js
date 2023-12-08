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

// Leaving the message blank will disable the validate message
function updateValidateMessage(parentContainer, message = '') {
    const validateElement = document.querySelector(
        `.${parentContainer} .validate`
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

    if (emailRegex.test(emailInput.value)) {
        updateValidateMessage('email', '');
        return true;
    }

    updateValidateMessage(
        'email',
        'Please enter a valid email (e.g. bob@gmail.com)'
    );

    return false;
}

function validateCountry() {}

function validatePostal() {}

function validatePassword() {}

function validateConfirmPass() {}

function validateInputs() {}

(() => {
    buildCountryOptions();

    const inputEventTypes = ['focusout', 'input'];

    inputEventTypes.forEach((inputType) => {
        emailInput.addEventListener(inputType, () => {
            validateEmail();
        });
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        validateInputs();
    });
})();
