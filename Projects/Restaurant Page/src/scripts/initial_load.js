import '../style/scss/main.scss';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';
import donut from '../style/media/donut-cropped.svg';

/**
 * Generates navigation buttons and then calls the homepage module
*/
(() => {
    let content = document.getElementById('content');

    content.appendChild(buildHeader());
    content.appendChild(buildNav());
    content.appendChild(buildElement('div', 'body', ''));

    content.appendChild(fillWithLorem());

    let h = document.querySelector('html');
    onscroll = () => {
        console.clear();
        console.log(h.scrollTop);
    }
})();

/**
 * Removes all of the child elements within the element
 */
function clearElement() {
}

/**
 * Returns a div with specified class(es)
 * @param type - element type
 * @param id - ID
 * @param classes - takes one or more class names eg. 'class1' || 'class1', 'class2', ...
 * @returns div
 */
function buildElement(type, id, ...classes) {
    let div = document.createElement(type);

    if (id != '') {
        div.id = id;
    }

    if (classes != '') {
        div.classList.add(...classes);
    }

    return div;
}

function buildHeader() {
    let header = buildElement('div', 'header', '');
    let logo = buildElement('div', 'logo', '');
    let logoImage = buildElement('img', '', '');
    let logoText = buildElement('div', '', 'logo-text');

    logoText.textContent = 'Andeez Donuts';
    logoImage.src = donut;

    logo.appendChild(logoImage);
    logo.appendChild(logoText);
    header.appendChild(logo);

    return header;
}

function buildNav() {
    let navBar = buildElement('div', 'top-nav', '');

    let pages = {
        'About': about,
        'Contact': contact,
        'Menu': menu,
    };

    navBar.appendChild(buildMobileNavBurger());

    let navLinks = buildElement('div', 'nav-links', '');
    navBar.appendChild(navLinks);

    Object.keys(pages).forEach((page) => {
        navLinks.appendChild(createButton(page, pages[page]));
    });

    return navBar;
}

function buildMobileNavBurger() {
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

/**
 * Returns a button element with an eventlistener that executes the action
 * parameter
 * @param name - button text and title
 * @param action - a function
 * @returns button
 */
function createButton(name, action) {
    let button = document.createElement('button');

    button.classList.add('nav');
    button.textContent = name;
    button.title = name;
    button.type = 'button';

    button.addEventListener('click', () => {
        /* If button contains a class indicating that it is the active page, then do nothing */
        action();
    })

    return button;
}

function fillWithLorem() {
    let stuff = buildElement('div', 'stuff', '');

    let paragraphs = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu risus. Vitae turpis massa sed elementum tempus. Tortor id aliquet lectus proin nibh nisl condimentum id. Turpis tincidunt id aliquet risus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Neque gravida in fermentum et sollicitudin. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Consequat id porta nibh venenatis. Vitae et leo duis ut diam quam nulla. Nibh nisl condimentum id venenatis a condimentum vitae. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. At auctor urna nunc id cursus metus aliquam. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.',

        'Diam maecenas ultricies mi eget mauris pharetra et ultrices. Ac tortor dignissim convallis aenean et tortor. Molestie at elementum eu facilisis sed odio morbi quis commodo. Vitae ultricies leo integer malesuada nunc vel risus commodo. Id diam maecenas ultricies mi eget. Leo in vitae turpis massa. Amet luctus venenatis lectus magna fringilla. Blandit cursus risus at ultrices mi. Semper risus in hendrerit gravida rutrum. Faucibus a pellentesque sit amet porttitor eget. Porta lorem mollis aliquam ut porttitor leo a. Orci ac auctor augue mauris. Ut aliquam purus sit amet luctus venenatis lectus magna. Tincidunt ornare massa eget egestas purus viverra accumsan in.',

        'Nunc vel risus commodo viverra. Ipsum suspendisse ultrices gravida dictum fusce ut. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Nulla aliquet enim tortor at auctor. Ut tristique et egestas quis ipsum. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Semper viverra nam libero justo laoreet sit. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Fames ac turpis egestas maecenas pharetra convallis.',

        'Neque convallis a cras semper auctor. Vulputate eu scelerisque felis imperdiet proin. Bibendum enim facilisis gravida neque convallis a cras. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Enim facilisis gravida neque convallis. Mi proin sed libero enim sed faucibus turpis in. Urna nec tincidunt praesent semper feugiat nibh. Tempus egestas sed sed risus. Hac habitasse platea dictumst quisque. Morbi tristique senectus et netus et. Semper eget duis at tellus at urna condimentum mattis.',

        'Ultrices tincidunt arcu non sodales neque sodales ut etiam. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin sed libero enim. Volutpat odio facilisis mauris sit amet massa. Massa sapien faucibus et molestie ac. Pulvinar elementum integer enim neque volutpat ac. Sit amet risus nullam eget felis eget nunc lobortis mattis. Eget mi proin sed libero enim sed faucibus turpis in. Facilisis leo vel fringilla est ullamcorper eget nulla. Fringilla urna porttitor rhoncus dolor. Purus ut faucibus pulvinar elementum integer. Tortor dignissim convallis aenean et tortor at risus. Quis lectus nulla at volutpat diam ut venenatis tellus in. Non arcu risus quis varius quam.'
    ];

    paragraphs.forEach(words => {
        let paragraph = buildElement('p', '', '');
        paragraph.textContent = words;
        stuff.appendChild(paragraph);
    });

    return stuff;
}