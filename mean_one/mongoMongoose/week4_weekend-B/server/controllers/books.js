const Author = require('mongoose').model('Author');
const Book = require('mongoose').model('Book');

module.exports = {
    index(request, response) {
        Book.find({})
            .populate('author')
            .then(books => {
                console.log(books);
                response.render('books/index', { books });
            }).catch(console.log);
    },
    show(request, response) {
        // Author.findById(request.params.id)
        //     .populate('books')
        //     .then(author => {
        //         console.log(author);
        //         response.render('authors/show', { author })
        //     })
        //     .catch(console.log);
    },
    edit(request, response) {
        // Author.findById(request.params.id)
        //     .populate('books')
        //     .then(author => {
        //         console.log(author);

        //         response.render('authors/edit', {author})
        //     })
        //     .catch(console.log);
    },
    new(request, response) {
        Author.find({})
            .then(authors => {
                response.render('books/new', { authors });
            })
            .catch(console.log);
    },
    update(request, response) {

    },
    create(request, response) {
        Book.create(request.body)
            .then(book => {
                console.log(book);
                return Author.findById(book.author)
                    .then(author => {
                        author.books.push(book);
                        return author.save();
                    });
        })
        .then(() => response.redirect('/books'))
        .catch(console.log);
    },
    destory(request, response) {

    },
};