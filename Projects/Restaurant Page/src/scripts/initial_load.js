import '../style/scss/main.scss';
import * as tools from './accessories';

/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    let content = document.getElementById('content');

    content.appendChild(tools.buildHeader());
    content.appendChild(tools.buildNav());
    content.appendChild(tools.buildElement('div', 'body', ''));

    content.appendChild(tools.fillWithLorem());

    let h = document.querySelector('html');
    onscroll = () => {
        console.clear();
        console.log(h.scrollHeight-window.innerHeight);
        /* use this for progress bar */
    }
})();