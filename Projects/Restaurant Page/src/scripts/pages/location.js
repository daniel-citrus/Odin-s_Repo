import { buildElement } from '../tools/accessories';
import './location.scss';

/**
 * Generate contact page content
 */

export default () => {
    let location = buildElement('div', 'location');

    let header = buildElement('div', '', 'header');
    header.textContent = 'Contact Us';
    location.appendChild(header);

    let address = buildElement('div', '', 'address');
    address.textContent = 'Address: 800 Culver Street, Commerce, TX 75428';
    location.appendChild(address);

    let map = buildElement('div', '', 'map');
    map.innerHTML = '<iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.139662062591!2d-95.89654502399613!3d33.23664436035473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864bc89eae23defb%3A0xf7a2110e2a70b25e!2sGood%20Donuts!5e0!3m2!1sen!2sus!4v1691716477054!5m2!1sen!2sus" width="1000" height="1000" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    location.appendChild(map);

    return location;
}