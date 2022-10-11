function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    let isRead = false;
    isRead = (this.read ? 'read' : 'not read yet');

    return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`;
}

Book.prototype.getTitle = function() {
    return `This book is called ${this.title}.`;
}

Book.prototype.otherInfo = function () {
    return "There is no other info.";
}

function Fantasy(title) {
    this.title = title;
}

Fantasy.prototype = Object.create(Book.prototype);

let f = new Fantasy('Baki');

document.write(f.getTitle()+ '<br>');
document.write(f.info() + '<br>');
document.write(f.otherInfo());