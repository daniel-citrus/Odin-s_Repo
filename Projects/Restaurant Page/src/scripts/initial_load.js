import '../style/scss/main.scss';
import initialize from './tools/accessories';
import './pages/about.scss';
import './pages/location.scss';
import './pages/menu.scss';

/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    let content = document.getElementById('content');
    initialize(content);
})();