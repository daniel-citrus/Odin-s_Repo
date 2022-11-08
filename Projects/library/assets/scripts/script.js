let addBookButton = document.querySelector(`form button.add`);
let cancelBookForm = document.querySelector(`form button.cancel`);
let clearBookForm = document.querySelector(`form button.clear`);
let libraryElement = document.getElementById('library');
let newBookButton = document.querySelector(`button[class='new-book']`);
let newBookForm = document.querySelector(`.new-book-form`);
let populateBookForm = document.querySelector(`form button.populate`);

addBookButton.addEventListener('click', (e) => {
    if (!newBookForm.checkValidity()) {
        return;
    }

    e.preventDefault();

    let inputs = [...newBookForm.querySelectorAll(`form input`)];
    let values = [];

    for (let i of inputs) {
        values.push(i.value);
    }

    let book = createBook(values);

    addBookToLibrary(book);
    displayBook(libraryElement, book);
    clearForm();
});

cancelBookForm.addEventListener('click', () => {
    newBookForm.style.display = 'none';
    clearForm();
});

clearBookForm.addEventListener('click', () => {
    clearForm();
});

populateBookForm.addEventListener('click', () => {
    let inputs = newBookForm.querySelectorAll('input');

    let data = ['The Count of Monte Cristo', 'Alexandre Dumas', 1844, 15, 1276];

    for (let d in data) {
        inputs[d].value = data[d];
    }
});

newBookButton.addEventListener('click', () => {
    newBookForm.style.display = 'block';
});

let library = {};

function Book(title, author, published, currentPage, pages) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.currentPage = currentPage;
    this.pages = pages;
    this.read = Boolean(currentPage === pages);
}

function addBookToLibrary(book) {
    library[book.title] = book;
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
        libraryElement.removeChild(deleteButton.parentElement);
        console.log(library);
    });

    return deleteButton;
}

function createDiv(divClass) {
    let div = document.createElement('div');
    div.classList.add(divClass);

    return div;
}

function clearForm() {
    let inputs = newBookForm.querySelectorAll('input');

    for (let i of inputs) {
        i.value = '';
    }
}

function createReadButton(isRead) {
    let readButton = document.createElement('button');
    readButton.setAttribute('book-completed', isRead);
    readButton.textContent = 'R';

    readButton.addEventListener('click', () => {
        let result;
        
        if (readButton.getAttribute('book-completed') === 'true') {
            result = false;
        }
        else {
            result = true;
        }

        readButton.setAttribute('book-completed', result);

        let bookTitle = readButton.parentElement.querySelector('.title').textContent;
        library[bookTitle].read = !library[bookTitle].read;
    });

    return readButton;
}

function displayBooks() {
    for (let l of Object.entries(library)) {
        displayBook(l[1]);
    }
}

function displayBook(book) {
    let card = createDiv('card');
    let title = createDiv('title');
    let author = createDiv('author');
    let published = createDiv('published');
    let currentPage = createDiv('currentPage');
    let pages = createDiv('pages');
    let read = createDiv('read');

    /* Button to delete card */
    let cardDelete = createCardDeleteButton();

    /* Button to update read status */
    let cardRead = createReadButton(book['read']);

    title.textContent = book['title'];
    author.textContent = 'Author: ' + book['author'];
    published.textContent = 'Published: ' + book['published'];
    currentPage.textContent = 'Current Page: ' + book['currentPage'];
    pages.textContent = 'Total Pages: ' + book['pages'];

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(published);
    card.appendChild(currentPage);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(cardDelete);
    card.appendChild(cardRead);

    libraryElement.appendChild(card);
}

let books = [
    ['The Count of Monte Cristo', 'Alexandre Dumas', 1844, 15, 1276],
    ['Nineteen Eigthy-Four', 'George Orwell', 1949, 328, 328],
    ['To Kill a Mockingbird', 'Harper Lee', 1960, 100, 281]
]

for (let b of books) {
    addBookToLibrary(createBook(b));
}

displayBooks();
console.log(library);