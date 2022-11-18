/*
    Library application that stores books. The book title is used as
    the unique identifier for each book.
*/
let addBookButton = document.querySelector(`form button.add`);
let cancelBookForm = document.querySelector(`form button.cancel`);
let clearBookForm = document.querySelector(`form button.clear`);
let libraryElement = document.querySelector('.library');
let newBookButtons = document.querySelectorAll(`button.new-book`);
let newBookForm = document.querySelector(`.new-book-form`);
let populateBookForm = document.querySelector(`form button.populate`);
let titleInputBox = document.getElementById('title');
let yearInputBox = document.getElementById('published');

addBookButton.addEventListener('click', (e) => {
    if (!newBookForm.checkValidity()) {
        return;
    }

    e.preventDefault();

    let book = createBook(getNewBookFormInputs());

    if (bookExists(book.title)) {
        titleInputBox.setCustomValidity('This book already exists in the library.');
        titleInputBox.reportValidity();
        return;
    }

    addBookToLibrary(book);
    displayBook(book);
    closeForm();
    clearForm();
});

cancelBookForm.addEventListener('click', () => {
    closeForm();
    clearForm();
});

clearBookForm.addEventListener('click', () => {
    clearForm();
});

let randomBooks = [
    [`It's a Magical World`, `Bill Watterson`, 1996, 176, false],
    [`Harry Potter and the Sorcerer's Stone`, `J.K. Rowling`, 1998, 321, true],
    [`Harry Potter and the Chamber of Secrets`, `J.K. Rowling`, 2000, 352, true],
    [`Harry Potter and the Prisoner of Azkaban`, `J.K. Rowling`, 2001, 448, true],
    [`Harry Potter and the Goblet of Fire`, `J.K. Rowling`, 2002, 752, false],
    [`Harry Potter and the Order of the Phoenix`, `J.K. Rowling`, 2004, 896, false],
    [`Harry Potter and the Half-Blood Prince`, `J.K. Rowling`, 2006, 672, false],
    [`Harry Potter and the Deathly Hallows`, `J.K. Rowling`, 2009, 784, false],
    [`Homicidal Psycho Jungle Cat (Calvin and Hobbes #9)`, `Bill Watterson`, 1994, 176, false],
    [`Calvin and Hobbes: Sunday Pages 1985-1995: An Exhibition Catalogue`, `Bill Watterson`, 2001, 96, false],
    [`The Days Are Just Packed`, `Bill Watterson`, 1993, 176, true],
    [`The Lord of the Rings: The Art of the Fellowship of the Ring`, `Gary Russell`, 2002, 192, false],
    [`The Complete Maus`, `Art Spiegelman`, 2003, 296, true],
    [`Herbert the Timid Dragon`, `Mercer Mayer`, 48, 1991, false],
    [`100 Years of Lynchings`, `Ralph Ginzburg`, 270, 1996, false],
    [`The Complete Novels`, `Jane Austen`, 1344, 1996, true],
    [`The Power Broker: Robert Moses and the Fall of New York`, `Robert A. Caro`, 1344, 1975, false],
    [`Herzog on Herzog`, `Paul Cronin`, 352, 2003, false]
];

newBookForm.addEventListener('click', (e) => {
    if (e.target === newBookForm) {
        closeForm();
    }
});

populateBookForm.addEventListener('click', () => {
    if (randomBooks.length == 0) {
        return;
    }

    titleInputBox.setCustomValidity('');

    let inputs = newBookForm.querySelectorAll('input');
    let bookIndex = getRandomNumber(0, randomBooks.length - 1);

    for (let b in randomBooks[bookIndex]) {
        if (b == randomBooks[bookIndex].length - 1) {
            document.querySelector(`#completed`).checked = randomBooks[bookIndex][b];
            break;
        }

        inputs[b].value = randomBooks[bookIndex][b];
    }

    randomBooks.splice(bookIndex, 1);

    if (randomBooks.length == 0) {
        populateBookForm.classList.add('disabled');
    }
});

titleInputBox.addEventListener('change', () => {
    titleInputBox.setCustomValidity('');
})

let library = {};

function Book(title, author, published, pages, read = false) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    this.read = read;
}

function activateNewBookForm() {
    newBookForm.classList.add('active');
    newBookForm.querySelector('input').focus();
}

function addBookToLibrary(book) {
    library[book.title] = book;
}

/* Sample Books */
function addSampleBooks() {
    let books = [
        ['The Count of Monte Cristo', 'Alexandre Dumas', 1844, 1276, false],
        ['Nineteen Eigthy-Four', 'George Orwell', 1949, 328, true],
        ['To Kill a Mockingbird', 'Harper Lee', 1960, 281, false]
    ]

    for (let b of books) {
        addBookToLibrary(createBook(b));
    }

    displayBooks();
}

/* Checks if a book (using the book title) exists in the library */
function bookExists(title) {
    return library.hasOwnProperty(title);
}

function clearForm() {
    let inputs = newBookForm.querySelectorAll('input');

    for (let i of inputs) {
        i.value = '';
    }

    let checkBoxes = newBookForm.querySelectorAll('input[type=checkbox]');

    for (let c of checkBoxes) {
        c.checked = false;
    }
}

function closeForm() {
    newBookForm.classList.remove('active');
}

function createBook(bookDetails) {
    let book = new Book(...bookDetails);

    return book;
}

function createCardDeleteButton() {
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('cardDelete');
    deleteButton.title = 'Delete card';
    deleteButton.ariaLabel = 'Delete card';

    deleteButton.addEventListener('click', () => {
        deleteBook(deleteButton.parentElement);
    });

    return deleteButton;
}

function createDiv(divClass) {
    let div = document.createElement('div');
    div.classList.add(divClass);

    return div;
}

function createReadButton(isRead) {
    let readButton = document.createElement('button');
    readButton.setAttribute('book-completed', isRead);
    readButton.classList.add('read');
    readButton.title = 'Toggle read';
    readButton.ariaLabel = 'Toggle read';


    isRead ? readButton.textContent = 'Complete' : readButton.textContent = 'Incomplete';

    readButton.addEventListener('click', () => {
        toggleRead(readButton.parentElement.parentElement);
    });

    return readButton;
}

function deleteBook(card) {
    let title = card.querySelector('.title').textContent;

    if (!library.hasOwnProperty(title)) {
        return;
    }

    delete library[title];
    libraryElement.removeChild(card);
}

/*
    Creates a new book node and inserts it into the library element
    
    Structure:

    card {
        cardDelete
        cardContents {
            title
            author
            published
            pages
        }
        buttons {
            cardRead
        }
    }
*/
function displayBook(book) {
    let card = createDiv('card');
    let buttons = createDiv('buttons');
    let cardContents = createDiv('cardContents');
    let title = createDiv('title');
    let author = createDiv('author');
    let published = createDiv('published');
    let pages = createDiv('pages');
    /* Button to delete card */
    let cardDelete = createCardDeleteButton();
    /* Button to update read status */
    let cardRead = createReadButton(book['read']);

    title.textContent = book['title'];
    author.textContent = 'Author: ' + book['author'];
    published.textContent = 'Published: ' + book['published'];
    pages.textContent = 'Pages: ' + book['pages'];

    card.appendChild(cardDelete);

    cardContents.appendChild(title);
    cardContents.appendChild(author);
    cardContents.appendChild(published);
    cardContents.appendChild(pages);

    card.appendChild(cardContents);

    buttons.appendChild(cardRead);

    card.appendChild(buttons);

    libraryElement.appendChild(card);
}

function displayBooks() {
    for (let l of Object.entries(library)) {
        displayBook(l[1]);
    }
}

/*
    Returns an array of inputs from the 'new book form'
    [title, author, published, pages, read]
*/
function getNewBookFormInputs() {
    let inputs = [...newBookForm.querySelectorAll(`input[type=text]`)];

    let values = [];

    for (let i of inputs) {
        values.push(i.value);
    }

    values.push(newBookForm.querySelector(`input[type=number]`).value);
    values.push(newBookForm.querySelector(`input[type=checkbox]`).checked);

    return values;
}

/* Returns a number between a and b (inclusive) */
function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

/* card - DOM node that represents a card for a book */
function toggleRead(card) {
    let title = card.querySelector('.title').textContent;
    let readButton = card.querySelector('button.read');

    /* Ensures that the book exists in the library */
    if (!library.hasOwnProperty(title)) {
        return;
    }

    let bookCompleted = !library[title].read;
    library[title].read = bookCompleted;
    readButton.setAttribute('book-completed', bookCompleted);

    bookCompleted ? readButton.textContent = 'Complete' : readButton.textContent = 'Incomplete';
}

document.addEventListener('DOMContentLoaded', () => {
    addSampleBooks();

    for (let b of newBookButtons) {
        b.addEventListener('click', () => { activateNewBookForm() });
    }
});