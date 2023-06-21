import '../style/scss/main.scss';
import navigation from './navigation';
import * as accessories from './accessories'

/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    buildHeader();
})();

function buildHeader() {
    let content = document.getElementById('content');
    content.appendChild(accessories.buildHeader());
    content.appendChild(navigation());
    content.appendChild(accessories.buildElement('div', 'body', ''));
}