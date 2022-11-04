let libraryElement = document.getElementById('library');
let newBookButton = document.querySelector(`button[class='new-book']`);
let newBookForm = document.querySelector(`.new-book-form`);

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

function createDiv(divClass) {
    let div = document.createElement('div');
    div.classList.add(divClass);

    return div;
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
        cardBoard.appendChild(card);
    }

    libraryElement.appendChild(cardBoard);

}

let books = [
    ['The Count of Monte Cristo', 'Alexandre Dumas', 1844, 15, 1276],
    ['Nineteen Eigthy-Four', 'George Orwell', 1949, 328, 328],
    ['To Kill a Mockingbird', 'Harper Lee', 1960, 100, 281]
]

function createBook(bookDetails) {
    let book = new Book(...bookDetails);
    addBookToLibrary(book);
}

for (let b of books) {
    createBook(b);
}

displayBooks();