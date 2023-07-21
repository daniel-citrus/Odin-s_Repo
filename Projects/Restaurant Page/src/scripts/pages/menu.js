import { buildElement } from '../tools/accessories';

/**
 * Generate menu page content
 */

export default () => {
    let menu = buildElement('div', 'menu', '');

    let items = [
        {
            name: 'Original Glazed Donut',
            calories: 120,
            protein: '2g',
        },
        {
            name: 'Kolaches',
            calories: 250,
            protein: '10g',
        },
    ];

    for (let item of items) {
        let card = buildElement('div', '', 'card');

        for (let detail in item) {
            let entry = buildElement('div', '', detail);
            
            if (detail === 'name') {
                entry.textContent = item[detail];
                card.appendChild(entry);
                continue;
            }

            entry.textContent = `${detail}: ${item[detail]}`;
            card.appendChild(entry);
        }

        menu.appendChild(card);
    }

    return menu;
}