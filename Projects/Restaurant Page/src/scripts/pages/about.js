import { buildElement } from "../tools/accessories";
import donutShelf from '../../style/media/donut-shelf.jpg';
/**
 * Generate about page content
 */

export default () => {
    let about = buildElement('div', 'about_description');

    let description = buildElement('div', '', 'description');
    description.textContent = 'We serve fresh donuts, kolaches, croissants, breakfast burritos, and coffee. Family owned and operated.';
    about.appendChild(description);

    let phone = buildElement('div', '', 'phone');
    phone.textContent = 'Phone: (903) 886-1011';
    about.appendChild(phone);

    /* Business Hours */
    let hours = buildElement('div', 'hours', '');
    let hoursTitle = buildElement('div', '', 'hoursTitle');
    hoursTitle.textContent = 'Hours of Operation';
    hours.appendChild(hoursTitle);

    let table = buildElement('table', 'hoursTable', '');
    let hoursInfo = [
        ['Day', 'Open', '', 'Close'],
        ['Monday', '4:30 AM', 'to', '1:00 PM'],
        ['Tuesday', '4:30 AM', 'to', '1:00 PM'],
        ['Wednesday', '4:30 AM', 'to', '1:00 PM'],
        ['Thursday', '4:30 AM', 'to', '1:00 PM'],
        ['Friday', '4:30 AM', 'to', '1:00 PM'],
        ['Saturday', '4:30 AM', 'to', '1:00 PM'],
        ['Sunday', '4:30 AM', 'to', '1:00 PM'],
    ];

    let cell;
    let row;
    for (let day of hoursInfo) {
        row = buildElement('tr', '', '');
        for (let info of day) {
            cell = buildElement('td', '', '');
            cell.textContent = info;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    about.appendChild(table);

    let donutImg = buildElement('img', '', 'donutShelf');
    donutImg.src = donutShelf;
    about.appendChild(donutImg);


    return about;
}