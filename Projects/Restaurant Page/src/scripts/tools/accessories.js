import donut from '../../style/media/donut-cropped.svg';
import * as mobile from './mobile';

/* Pages */
import about from '../pages/about';
import menu from '../pages/menu';
import location from '../pages/location';

/**
 * Inserts the main header and navigation to contentDiv parameter
 * @param {element} contentDiv 
 */
export default function initialize(contentDiv) {
    contentDiv.appendChild(buildHeader());
    contentDiv.appendChild(buildNav());
    contentDiv.appendChild(buildElement('div', 'body', ''));
    /* let div = document.querySelector('#top-nav #nav-links button'); */
    let div = document.querySelectorAll('#top-nav #nav-links button')[2];
    div.click();
}

/**
 * Returns a div with specified class(es)
 * @param {element} type - element type
 * @param id - ID
 * @param classes - takes one or more class names eg. 'class1' || 'class1', 'class2', ...
 * @returns div
 */
export function buildElement(type, id, ...classes) {
    let div = document.createElement(type);

    if (id != '') {
        div.id = id;
    }

    if (classes != '') {
        div.classList.add(...classes);
    }

    return div;
}

export function buildHeader() {
    let header = buildElement('div', 'header', '');
    let logo = buildElement('div', 'logo', '');
    let logoImage = buildElement('img', '', '');
    let logoText = buildElement('div', '', 'logo-text');

    logoText.textContent = 'Good Donuts';
    logoImage.src = donut;

    logo.appendChild(logoImage);
    logo.appendChild(logoText);
    header.appendChild(logo);

    return header;
}

/**
 * Additional pages can be added by adding a key/pair value into the "pages" object initializer
 * @returns navBar element containing navigation links
 */
export function buildNav() {
    let navBar = buildElement('div', 'top-nav', '');

    let pages = {
        'About': about,
        'Menu': menu,
        'Location': location,
    };
    navBar.appendChild(mobile.buildMobileNavBurger());

    let navLinks = buildElement('div', 'nav-links', '');
    navBar.appendChild(navLinks);

    Object.keys(pages).forEach((page) => {
        navLinks.appendChild(createNavButton(page, pages[page]));
    });

    return navBar;
}

/**
 * Removes all of the child elements within the id='body' element
 */
function clearBody() {
    const body = document.getElementById('body');

    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}

/**
 * Returns a nav button with an eventlistener that clears the body element,
 * populates it with new data, and then closes the mobile nav bar.
 * @param name - button text and title
 * @param action - a function
 * @returns button
 */
export function createNavButton(name, action) {
    let button = document.createElement('button');

    button.classList.add('nav','selected');
    button.textContent = name;
    button.title = name;
    button.type = 'button';

    button.addEventListener('click', (e) => {
        clearSelectedStatus();
        e.target.classList.add('selected');
        clearBody();
        let body = document.getElementById('body');
        body.appendChild(action());
        mobile.disableBurger();
    })

    function clearSelectedStatus() {
        let selectedButtons = document.querySelectorAll('button.nav');
        selectedButtons.forEach((btn) => {
            btn.classList.remove('selected');
        });
    }

    return button;
}