import '../style/scss/main.scss';
import * as tools from './tools';

/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    let content = document.getElementById('content');

    content.appendChild(tools.buildHeader());
    content.appendChild(tools.buildNav());
    content.appendChild(tools.buildElement('div', 'body', ''));
})();