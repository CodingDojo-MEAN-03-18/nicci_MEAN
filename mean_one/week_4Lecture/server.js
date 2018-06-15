//***connection data ***/
const mongoose = require('mongoose');

//destructureing syntax - Schema is a contructor function
const { Schema } = mongoose;
// const Schema = mongoose.Schema;
//this is gonna connect us to mongodb
mongoose.connect('mongodb://localhost/animalsz');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));
//***connection data ***/

// const o = {
//     a: 'a',
//     b: 'b',
// };
// const a = o.a;
// const a ='another a';
// const { a: c,b } = o;
// console.log(a, c, b);

const animalSchema = new Schema({
    name: {
        type: String,
        required: [true,'Provide an animal name']
    },
    age: {
        type: Number,
        required: [true,'Provide age'],
        min:[0,'provide real age'],
        max: [1000, 'animals do not live that long!']
    },
    eatsPpl: {
        Boolean,
        default: false
    },
});

//register schema with mongoose
//collection name in Mongo will be 'animals' (getter)
mongoose.model('Animal', animalSchema);

//retrieve what we just registered (setter)
const Animal = mongoose.model('Animal');

// create instance of 'Animal'
const animal = new Animal({
    name: 'Chewy',
    // age: 2.5,
    eatsPpl: false,
});
console.log(animal);
// animal.save(function(err, animalDoc){
//     console.log(err, animalDoc);
// });

// got from: (https://stackoverflow.com/questions/13751166/javascript-uncaught-referenceerror-keys-is-not-defined), not lecture... ugh
// function key (object) {
//     return Object.keys( object );
// }

animal.save()
    .then(function (document){
        console.log('saved document', document);
    })
    .catch(function(error){
        const errors =  Object.keys(error.errors).map(key => error.errors[key].message)
        // response.render('form-page', { errors })
        console.log(errors);
    });


