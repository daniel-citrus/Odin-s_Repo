let addBookButton = document.querySelector(`form button.add`);
/* let cancelBookForm = document.querySelector(`form button.cancel`); */
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

    addBookToLibrary(createBook(values));
    displayBooks();
});

/* cancelBookForm.addEventListener('click', () => {
    newBookForm.style.display = 'none';
    clearForm();
}); */

clearBookForm.addEventListener('click', () => {
    clearForm();
});

populateBookForm.addEventListener('click', () => {
    let inputs = newBookForm.querySelectorAll('input');

    let data = ['The Count of Monte Cristo', 'Alexandre Dumas', 1844, 15, 1276];

    for(let d in data) {
        inputs[d].value = data[d];
    }
});

newBookButton.addEventListener('click', () => {
    newBookForm.style.display = 'block';
});

let library = [];

function Book(title, author, published, currentPage, pages) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.currentPage = currentPage;
    this.pages = pages;
    this.read = (Boolean(currentPage === pages) ? 'Finished' : 'Not Finished');
}

function addBookToLibrary(book) {
    library.push(book);
}

function createBook(bookDetails) {
    let book = new Book(...bookDetails);
    return book;
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

function displayBooks() {
    let cardBoard = createDiv('card-board');
    let card, title, author, published, currentPage, pages, read;

    for (let book of library) {
        card = createDiv('card');
        title = createDiv('title');
        author = createDiv('author');
        published = createDiv('published');
        currentPage = createDiv('currentPage');
        pages = createDiv('pages');
        read = createDiv('read');

        title.textContent = book.title;
        author.textContent = 'by ' + book.author;
        published.textContent = 'Published: ' + book.published;
        currentPage.textContent = book.currentPage;
        pages.textContent = book.pages;
        read.textContent = book.read;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(published);
        card.appendChild(currentPage);
        card.appendChild(pages);
        card.appendChild(read);

        /* Create data-attribute for book and save its index in the library */
        card.setAttribute('library-index', library.indexOf(book));

        cardBoard.appendChild(card);
    }

    libraryElement.appendChild(cardBoard);

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