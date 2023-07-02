import { buildElement } from "../tools/accessories";

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

    let address = buildElement('div', '', 'address');
    address.textContent = 'Address: 800 Culver Street, Commerce, TX 75428';
    about.appendChild(address);

    let map = buildElement('div', '', 'map');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427243.1265642727!2d-96.4976552105055!3d33.21837117916807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864bc89eae23defb%3A0xf7a2110e2a70b25e!2sGood%20Donuts!5e0!3m2!1sen!2sus!4v1686700624215!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    about.appendChild(map);

    
    return about;
}