import '../style/style.scss';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';


/**
 * Generates navigation buttons and then calls the homepage module
 */
(() => {
    let content = document.getElementById('content');

    let pages = {
        'About': about,
        'Contact': contact,
        'Menu': menu,
    };

    Object.keys(pages).forEach((page) => {
        content.appendChild(createButton(page, pages[page]));
    });
})();

/**
 * Returns a button element with an eventlistener that executes the action
 * parameter
 * @param name - button text and title
 * @param action - a function
 * @returns button
 */
function createButton(name, action) {
    let button = document.createElement('button');

    button.textContent = name;
    button.title = name;
    button.type = 'button';
    button.classList.add('nav');

    button.addEventListener('click', () => {
        action();
    })

    return button;
}

// About
// Menu
// Location