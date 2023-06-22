import { buildElement } from "../accessories";

/**
 * Generate about page content
 */

export default () => {
    let about = document.createElement('div', 'about_description');
    let information = {
        description: 'We serve fresh donuts, kolaches, croissants, breakfast burritos, and coffee. Family owned and operated since 2014.',
    }

    for (let item in information) {
        let infoItem = buildElement('p', '', 'info');
        infoItem.textContent = information[item];
        about.appendChild(infoItem);
    }

    return about;
}