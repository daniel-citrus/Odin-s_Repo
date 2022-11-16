/*
    Library application that stores books. The book title is used as
    the unique identifier for each book.
*/

let addBookButton = document.querySelector(`form button.add`);
let cancelBookForm = document.querySelector(`form button.cancel`);
let clearBookForm = document.querySelector(`form button.clear`);
let libraryElement = document.querySelector('.library');
let newBookButton = document.querySelector(`button[class='new-book']`);
let newBookForm = document.querySelector(`.new-book-form`);
let populateBookForm = document.querySelector(`form button.populate`);
let titleInputBox = document.getElementById('title');

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
    [`It's a Magical World (Calvin and Hobbes #11)`, `Bill Watterson`, 1996, 176, false],
    [`Harry Potter Collection (Harry Potter #1-6)`, `J.K. Rowling`, 2005, 3342, true],
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

newBookButton.addEventListener('click', () => {
    newBookForm.classList.add('active');
    newBookForm.querySelector('input').focus();
});

titleInputBox.addEventListener('change', ()=> {
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

function addBookToLibrary(book) {
    library[book.title] = book;
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
    deleteButton.textContent = 'X';
    deleteButton.classList.add('cardDelete');

    deleteButton.addEventListener('click', () => {
        deleteBook(deleteButton.parentElement);
        console.log(library);
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
    readButton.textContent = 'R';

    readButton.addEventListener('click', () => {
        toggleRead(readButton.parentElement);
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

/* Creates a new book node and inserts it into the library element */
function displayBook(book) {
    let card = createDiv('card');
    let title = createDiv('title');
    let author = createDiv('author');
    let published = createDiv('published');
    let pages = createDiv('pages');
    let read = createDiv('read');

    /* Button to delete card */
    let cardDelete = createCardDeleteButton();

    /* Button to update read status */
    let cardRead = createReadButton(book['read']);

    title.textContent = book['title'];
    author.textContent = 'Author: ' + book['author'];
    published.textContent = 'Published: ' + book['published'];
    pages.textContent = 'Pages: ' + book['pages'];

    card.appendChild(cardDelete);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(published);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(cardRead);

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

    if (!library.hasOwnProperty(title)) {
        return;
    }

    library[title].read = !library[title].read;
    readButton.setAttribute('book-completed', library[title].read);
}

/* Sample Books */
document.addEventListener('DOMContentLoaded', () => {
    let books = [
        ['The Count of Monte Cristo', 'Alexandre Dumas', 1844, 1276, false],
        ['Nineteen Eigthy-Four', 'George Orwell', 1949, 328, true],
        ['To Kill a Mockingbird', 'Harper Lee', 1960, 281, false]
    ]

    for (let b of books) {
        addBookToLibrary(createBook(b));
    }

    displayBooks();
})