import { buildElement } from "./accessories";

/**
 * @returns mobileHamburger button that toggles the mobile navigation bar
 */
export default function buildMobileNavBurger() {
    let mobileHamburger = buildElement('button', 'navBurger', 'hamburger', 'hamburger--squeeze');

    mobileHamburger.addEventListener('click', () => {
        mobileHamburger.classList.toggle('is-active');
    })

    mobileHamburger.type = 'button';
    let hamburgerBox = buildElement('span', '', 'hamburger-box');
    let hamburgerInner = buildElement('span', '', 'hamburger-inner');

    hamburgerBox.appendChild(hamburgerInner);
    mobileHamburger.appendChild(hamburgerBox);

    return mobileHamburger;
}