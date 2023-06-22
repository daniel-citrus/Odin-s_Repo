import { buildElement } from "../tools";

/**
 * Generate contact page content
 */

export default () => {
    let location = buildElement('div', '', 'contact');
    let header = buildElement('h1', '', '');

    header.textContent = 'Location';
    location.appendChild(header);

    let information = {
        Phone: '(903) 886-1011',
        Address: '800 Culver Street, Commerce, TX 75428',

        /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427243.1265642727!2d-96.4976552105055!3d33.21837117916807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864bc89eae23defb%3A0xf7a2110e2a70b25e!2sGood%20Donuts!5e0!3m2!1sen!2sus!4v1686700624215!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
    }

    for (let item in information) {
        let div = buildElement('div', '', item);

        div.textContent = information[item];
        location.appendChild(div);
    }

    let map= buildElement('iframe','map','');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427243.1265642727!2d-96.4976552105055!3d33.21837117916807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864bc89eae23defb%3A0xf7a2110e2a70b25e!2sGood%20Donuts!5e0!3m2!1sen!2sus!4v1686700624215!5m2!1sen!2sus';

    return location;
}