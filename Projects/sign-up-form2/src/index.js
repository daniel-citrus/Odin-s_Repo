import * as zipTools from './zipRegex';

const submitButton = document.querySelector('form button[type="button"]');
const emailInput = document.getElementById('email');
const emailValidate = document.querySelector('.email .validate');
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

function validateEmail() {
    const emailRegex =
        /^([a-zA-Z0-9]{1,}@[a-zA-Z0-9]{1,}).[a-zA-Z0-9]{1,}(.[a-zA-Z0-9]{1,}(.[a-zA-Z0-9]{1,})?)?$/gm;

    if (emailRegex.test(emailInput.value)) {
        emailValidate.classList.remove('flag');
        emailValidate.textContent = '';
        return true;
    }

    emailValidate.classList.add('flag');
    emailValidate.textContent =
        'Please enter a valid email (e.g. bob@gmail.com)';

    return false;
}

function validateInputs() {}

(() => {
    buildCountryOptions();

    const inputEventTypes = ['focusout', 'keyup', 'input'];

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
