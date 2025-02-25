const bookFunctions = {
    collection: new Map(),
    idCounter: 1,

    add: (title, author, read = false) => {
        const id = bookFunctions.idCounter++;
        bookFunctions.collection.set(id, { id, title, author, read });
        return bookFunctions.collection.get(id);
    },

    search: (id) => bookFunctions.collection.get(id) || null,

    list: () => Array.from(bookFunctions.collection.values()),

    byAuthor: (author) => Array.from(bookFunctions.collection.values()).filter(book => book.author === author),

    byRead: () => Array.from(bookFunctions.collection.values()).filter(book => book.read),

    deleteOne: (id) => bookFunctions.collection.delete(id),

    deleteAll: () => bookFunctions.collection.clear()
};

bookFunctions.add("The Hobbit", "J.R.R. Tolkien");
bookFunctions.add("1984", "George Orwell", true);
bookFunctions.add("Brave New World", "Aldous Huxley", true);

console.log(bookFunctions.list());
console.log(bookFunctions.search(1));
console.log(bookFunctions.byAuthor("George Orwell"));
console.log(bookFunctions.byRead());
bookFunctions.deleteOne(2);
console.log(bookFunctions.list());
bookFunctions.deleteAll();
console.log(bookFunctions.list());