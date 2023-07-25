import { buildElement } from '../tools/accessories';

/**
 * Generate menu page content
 */

export default () => {
    let menu = buildElement('div', 'menu', '');

    let food = [
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
    ]

    let drinks = [
        {
            name: 'Coffee',
            calories: 10,
            protein: 0,
        },
        {
            name: 'Orange Juice',
            calories: 170,
            protein: 2,
        }
    ]

    let foodDiv = buildElement('div', '', 'foods');
    foodDiv.textContent = 'Food';

    let foodCard, name, calories, protein;
    for (let foodItem of food) {
        foodCard = buildElement('div', '', 'food');
        foodCard.textContent = 'Food'

        name = buildElement('div', '', 'name');
        name.textContent = foodItem.name;
        foodCard.appendChild(name);

        calories = buildElement('div', '', 'name');
        calories.textContent = foodItem.calories;
        foodCard.appendChild(calories);
        
        protein = buildElement('div', '', 'name');
        protein.textContent = foodItem.protein;
        foodCard.appendChild(protein);
        
        menu.appendChild(foodCard);
    }



    return menu;
}