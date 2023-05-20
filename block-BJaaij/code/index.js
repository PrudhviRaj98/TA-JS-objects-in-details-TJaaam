class Book {
    constructor(title, Category, Author, isRead, finishedDate) {
        this.title = title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

class BookList {
    constructor() {
        this.books = [];
        this.currentIndexBook = 0;
    }
    add(books = []) {
        this.books = this.books.concat(books);
        return this.books;
    }
    getCurrentBook(index) {
        return this.books[this.currentIndexBook];
    }
    getNextBook() {
        return this.books[this.currentIndexBook + 1];
    }
    getPreviousBook() {
        return this.books[this.currentIndexBook - 1];
    }
    changeCurrentBook(index) {
        this.currentIndexBook = index;
        return this.currentIndexBook
    }
}

let book1 = new Book("prudhvi", "fiction", "Raj", "No", "tommrow")
let book2 = new Book("mom", "non-fiction", "Raj", "No", "tommrow")
let book3 = new Book("dad", "comedy", "Raj", "No", "tommrow")
let book4 = new Book("bro", "thillar", "Raj", "No", "tommrow")
let book5 = new Book("cousin", "action", "Raj", "No", "tommrow")

let library = new BookList();
library.add(book1, book2, book3, book4, book5);