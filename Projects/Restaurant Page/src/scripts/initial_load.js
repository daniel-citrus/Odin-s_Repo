import '../style/scss/main.scss';
import initialize from './tools/accessories';
import '../style/scss/about.scss';
import '../style/scss/location.scss';
import '../style/scss/menu.scss';

/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    let content = document.getElementById('content');
    initialize(content);
})();