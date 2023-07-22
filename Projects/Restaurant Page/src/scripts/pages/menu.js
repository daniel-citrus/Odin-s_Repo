import { buildElement } from '../tools/accessories';

/**
 * Generate menu page content
 */

export default () => {
    let menu = buildElement('div', 'menu', '');

    let items1 = {
        Food: [
            {}
        ],
        Drinks: [
            {
                name: 'Coffee',
                calories: 10,
                protein: 0,
            }
        ]
    };
    let items = [
        {
            name: 'Original Glazed Donut',
            calories: 190,
            protein: 0,
        },
        {
            name: 'Kolache',
            calories: 480,
            protein: 0,
        },
        {
            name: 'Croissant',
            calories: 230,
            protein: 0
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

            entry.textContent = `${detail.charAt(0).toUpperCase() + detail.slice(1)}: ${item[detail]}`;
            card.appendChild(entry);
        }

        menu.appendChild(card);
    }

    return menu;
}