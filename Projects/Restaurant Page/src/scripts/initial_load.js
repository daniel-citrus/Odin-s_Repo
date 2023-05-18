import '../style/style.scss';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';

let content = document.getElementById('content');

/**
 * Generates navigation buttons and then calls the homepage module
 */
(() => {
    buildHeader();

    let pages = {
        'About': about,
        'Contact': contact,
        'Menu': menu,
    };

    Object.keys(pages).forEach((page) => {
        content.appendChild(createButton(page, pages[page]));
    });

    buildFooter();
})();

/**
 * Builds the header, footer, and background of the website
*/
function buildHeader() {
    let header = document.createElement('div');

    header.classList.add('header');
    header.textContent = 'Header';
    content.appendChild(header);
}

function buildFooter() {
    let footer = document.createElement('div');

    footer.classList.add('footer');
    footer.textContent = 'Footer';
    content.appendChild(footer);
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
        action();
    })

    return button;
}