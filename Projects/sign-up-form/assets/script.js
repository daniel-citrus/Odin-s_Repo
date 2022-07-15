let phone = document.getElementById('phone');
let phoneSpan = phone.nextSibling;


phone.addEventListener('keydown', (e) => {
    let key = e.key;

    if (key == 0 ||
        key == 1 ||
        key == 2 ||
        key == 3 ||
        key == 4 ||
        key == 5 ||
        key == 6 ||
        key == 7 ||
        key == 8 ||
        key == 9 ||
        key) {
        console.log(key);
    }
    else {
        e.preventDefault();
        return false;
    }
});

phone.addEventListener('keyup', () => {
    errorCheckPhone();
});

function errorCheckPhone() {
    let message = '';

    if (phone.validity.patternMismatch) {
        message = 'Required phone format: 123-456-7890';
    }
    else {
        message = '';
    }

    phoneSpan.textContent = message;
}

function formatPhone() {
    let text = phone.textContent;
    console.log('hi');
    if (text.length === 3) {

    }
}