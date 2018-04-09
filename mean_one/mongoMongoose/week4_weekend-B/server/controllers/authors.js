//model information
const Author = require('mongoose').model('Author');

//all the methods we want associated with the author we pull out
module.exports = {
    index(request, response){
        Author.find({})
            .then(authors => {
                console.log(authors);
                response.render('authors/index', {authors});
            })
            .catch(console.log);
    },
    show(request, response){
        Author.findById(request.params.id)
            .populate('books')
            .then(author => {
                console.log(author);
                response.render('authors/show', {author})
            })
            .catch(console.log);
    },
    edit(request, response){
        Author.findById(request.params.id)
            .populate('books')
            .then(author => {
                console.log(author);

                response.render('authors/edit', {author})
            })
        .catch(console.log);    
    },
    new(request, response){
        response.render('authors/new');
    }, 
    update(request, response){
        Author.findByIdAndUpdate(request.params.id, request.body)
            .then(() => {
                response.redirect('/authors');
            })
            .catch(console.log);    
    },
    create(request, response){
        console.log(request.body);
        const author = new Author(request.body);

        //more stuff here

        author.save()
            .then(author => {
                console.log(author);
                response.redirect('/author');
            })
            .catch(error =>{
                //handle error
            });
    },
    destory(request, response){
        Author.findByIdAndRemove(request.params.id)
            .then(author => response.redirect('/authors/index'))
            .catch(console.log);
    },
};