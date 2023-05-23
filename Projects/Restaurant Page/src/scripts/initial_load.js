import '../style/style.scss';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';

let content = document.getElementById('content');

/**
 * Generates navigation buttons and then calls the homepage module
 */
(() => {
    content.appendChild(buildDiv('div', 'header'));

    let pages = {
        'About': about,
        'Contact': contact,
        'Menu': menu,
    };

    Object.keys(pages).forEach((page) => {
        content.appendChild(createButton(page, pages[page]));
    });

    content.appendChild(buildDiv('div', 'footer'));
})();

/**
 * Returns a div with specified class(es)
 * @param type element type
 * @param classes - takes one or more class names eg. 'class1' || 'class1', 'class2', ...
 * @returns div
 */
function buildDiv(type, ...classes) {
    let div = document.createElement(type);

    div.classList.add(classes);

    return div;
}

function buildHeader() {
    let header = buildDiv('div', 'header');
    let logo = buildDiv('div', 'logo');
    let logoText = buildDiv('div', 'logo-text');

}

/**
 * Returns a button element with an eventlistener that executes the action
 * parameter
 * @param name - button text and title
 * @param action - a function
 * @returns button
 */
function createButton(name, action) {
    let button = document.createElement('button');

    button.classList.add('nav');
    button.textContent = name;
    button.title = name;
    button.type = 'button';

    button.addEventListener('click', () => {
        /* If button contains a class indicating that it is the active page, then skip */
        action();
    })

    return button;
}