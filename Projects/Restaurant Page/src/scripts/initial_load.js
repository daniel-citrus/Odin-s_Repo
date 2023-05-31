import '../style/style.scss';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';

let content = document.getElementById('content');
let body = document.querySelector('body');

/**
 * Generates navigation buttons and then calls the homepage module
 */
(() => {
    content.appendChild(buildHeader());
})();

/**
 * Returns a div with specified class(es)
 * @param type element type
 * @param classes - takes one or more class names eg. 'class1' || 'class1', 'class2', ...
 * @returns div
 */
function buildElement(type, id, ...classes) {
    let div = document.createElement(type);

    if (id != '') {
        div.id = id;
    }

    if (classes != '') {
        div.classList.add(classes);
    }

    return div;
}

function buildHeader() {
    let header = buildElement('div', 'header', '');
    let logo = buildElement('div', 'logo', '');
    let logoImage = buildElement('img', '', '');
    let logoText = buildElement('div', '', 'logo-text');

    logoText.textContent = 'Andeez Donuts';
    
    logo.appendChild(logoImage);
    logo.appendChild(logoText);
    header.appendChild(logo);
    header.appendChild(buildNav());

    return header;
}

function buildNav() {
    let navBar = buildElement('div', 'top-nav', '');
    
    let pages = {
        'About': about,
        'Contact': contact,
        'Menu': menu,
    };

    Object.keys(pages).forEach((page) => {
        navBar.appendChild(createButton(page, pages[page]));
    });

    return navBar;
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
        /* If button contains a class indicating that it is the active page, then do nothing */
        action();
    })

    return button;
}