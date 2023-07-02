import { buildElement } from "../tools/accessories";
import './about.scss';

/**
 * Generate about page content
 */

export default () => {
    let about = buildElement('div', 'about_description');
    let information = {
        phone: 'Phone: (903) 886-1011',
    }

    let description = buildElement('div', '', 'description');
    description.textContent = 'We serve fresh donuts, kolaches, croissants, breakfast burritos, and coffee. Family owned and operated.';
    about.appendChild(description);

    
    return about;
}