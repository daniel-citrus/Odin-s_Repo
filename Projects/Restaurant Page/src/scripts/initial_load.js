import '../style/scss/main.scss';
import initialize from './tools/accessories';

/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    let content = document.getElementById('content');
    initialize(content);
})();