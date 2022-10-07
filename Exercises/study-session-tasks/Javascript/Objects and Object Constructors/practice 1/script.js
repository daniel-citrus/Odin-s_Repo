function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    let isRead = false;
    isRead = (this.read ? 'read' : 'not read yet');

    return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`;
}

Book.prototype.otherInfo = function() {
    return "There is no other info.";
}

function Genre(name) {
    this.name = name;
}

Genre.prototype = Object.create(Book.prototype);

let book = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
document.write(book.info());
