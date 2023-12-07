import * as zipTools from './zipRegex';

const countrySelect = document.getElementById('country');

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

        countrySelect.appendChild(option);
    });
}

(() => {
    buildCountryOptions();
})();
