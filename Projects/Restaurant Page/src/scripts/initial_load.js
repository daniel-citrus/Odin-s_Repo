import '../style/scss/main.scss';
import * as accessories from './tools';
/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    initialize();
})();

function initialize() {
    let content = document.getElementById('content');
    content.appendChild(accessories.buildHeader());
    content.appendChild(accessories.buildElement('div', 'contentBody', ''));
}