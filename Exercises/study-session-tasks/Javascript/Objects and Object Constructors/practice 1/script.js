function Book() {
}

Book.prototype.info = function () {
    let isRead = false;
    isRead = (this.read ? 'read' : 'not read yet');

    return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`;
}

Book.prototype.getTitle = function () {
    return `This book is called ${this.title}.`;
}

function Fantasy(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Fantasy.prototype = Object.create(Book.prototype);

Fantasy.prototype.otherInfo = function () {
    return "There is no other info.";
}

let f = new Fantasy('Baki', 'Keisuke Itagaki', 1024, false);

document.write(f.getTitle() + '<br>');
document.write(f.info() + '<br>');
document.write(f.otherInfo());