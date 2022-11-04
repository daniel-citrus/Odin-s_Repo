let libraryElement = document.getElementById('library');

let library = [];

function Book(title, author, published, currentPage, pages, read) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.currentPage = currentPage;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayBooks() {
    for (let book in library) {
        let node = document.createElement('div');
        node.textContent = 'book';
        libraryElement.appendChild(node);
    }
}

let b = new Book('Harry Potter', 'Daniel Calvo', 1999, 210, 500, false);
addBookToLibrary(b);
addBookToLibrary(b);
addBookToLibrary(b);
addBookToLibrary(b);
displayBooks();