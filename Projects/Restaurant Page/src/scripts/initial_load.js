import '../style/style.scss';
import about from './pages/about.js';

/**
 * Generates navigation buttons and then calls the homepage module
 */
(() => {
    let pages = ['About', 'Menu', 'Location'];

    /* pages.forEach((page) => {
        
    }) */
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
    
    button.type = 'button';
    button.title = name;
    button.classList.add('nav');

    button.addEventListener('click', () => {
        action();
    })

    return button;
}

// About
// Menu
// Location