import { buildElement } from "../tools/accessories";
import donutShelf from '../../style/media/donut-shelf.jpg';

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
    
    let donutImg = buildElement('img', '', 'donutShelf');
    donutImg.src = donutShelf;
    about.appendChild(donutImg);
    
    return about;
}