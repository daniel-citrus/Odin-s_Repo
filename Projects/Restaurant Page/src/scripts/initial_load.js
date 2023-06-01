import '../style/scss/main.scss';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';
import donut from '../style/media/donut-cropped.svg';

/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    let content = document.getElementById('content');

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
        div.classList.add(...classes);
    }

    return div;
}

function buildHeader() {
    let header = buildElement('div', 'header', '');
    let logo = buildElement('div', 'logo', '');
    let logoImage = buildElement('img', '', '');
    let logoText = buildElement('div', '', 'logo-text');

    logoText.textContent = 'Andeez Donuts';
    logoImage.src = donut;

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

    let mobileHamburger = buildElement('button', '', 'hamburger', 'hamburger--squeeze');
    mobileHamburger.type = 'button';
    
    let hamburgerBox = buildElement('span', '', 'hamburger-box');
    let hamburgerInner = buildElement ('span', '', 'hamburger-inner');

    hamburgerBox.appendChild(hamburgerInner);
    mobileHamburger.appendChild(hamburgerBox);
    navBar.appendChild(mobileHamburger);

    let navOptions = buildElement('div', 'nav-links', '');
    navBar.appendChild(navOptions);

    Object.keys(pages).forEach((page) => {
        navOptions.appendChild(createButton(page, pages[page]));
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