import { buildElement } from "../tools";

/**
 * Generate about page content
 */

export default () => {
    let about = buildElement('div', 'about_description');
    let header = buildElement('h1', '', '');

    header.textContent = 'About Us';
    about.appendChild(header);

    let information = {
        description: 'We serve fresh donuts, kolaches, croissants, breakfast burritos, and coffee. Family owned and operated since 2014.',
    }
    let description = buildElement('div', '', 'description');

    description.textContent = information['description'];
    about.appendChild(description);

    return about;
}