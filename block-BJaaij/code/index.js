class BookList {
    constructor() {

    }
    Title() {

    }
    Category() {

    }
    Author() {

    }
    isRead() {

    }
    finishedDate() {

    }
}

class Book extends BookList {
    constructor() {

    }
    markBookAsRead() {
        return this.isRead = true & this.finishedDate == DateConstructor.now()
    }

}