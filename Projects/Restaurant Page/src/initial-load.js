import "./style/style.scss";

/**
 * Generates navigation buttons and then calls the homepage module
 */
(() => {
    
})();

/**
 * @param pageLoader - loads a page's contents 
 * @returns button that executes the pageLoader function when clicked 
 */
function createNavButton(pageLoader) {
    let button = document.createElement('button');
    button.classList.add('nav');

    button.addEventListener('click', () => {
        pageLoader();
    })

    return button;
}

// About
// Menu
// Location