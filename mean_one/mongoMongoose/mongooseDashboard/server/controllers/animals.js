//model information
const Animal = require('mongoose').model('Animal');

//all the methods we want associated with the animal we pull out
module.exports = {
    index(request, response) {
        Animal.find({})
            .then(animals => {
                console.log(animals);
                response.render('animals/index', { animals });
            })
            .catch(console.log);
    },
    show(request, response) {
        Animal.findById({request.params.id})
            .populate('animals')
            .then(animal => {
                console.log(animal);
                response.render('animals/show', { animal })
            })
            .catch(console.log);
    },
    edit(request, response) {
        // Animal.findById(request.params.id)
        Animal.findById(request.params.id)
            .populate('animals')
            .then(animal => {
                console.log(animal);

                response.render('animals/edit', { animal })
            })
            .catch(console.log);
    },
    new(request, response) {
        response.render('animals/new');
    },
    update(request, response) {
        Animal.findByIdAndUpdate(request.params.id, request.body)
            .then(() => {
                response.redirect('/animals');
            })
            .catch(console.log);
    },
    create(request, response) {
        console.log(request.body);
        const animal = new Animal(request.body);

        //more stuff here

        animal.save()
            .then(animal => {
                console.log(animal);
                response.redirect('/animals');
            })
            .catch(error => {
                //handle error
            });
    },
    destory(request, response) {
        Animal.findByIdAndRemove(request.params.id)
            .then(animal => response.redirect('/animals/index'))
            .catch(console.log);
    },
};