const mongoose = require('mongoose');
//object destructuing.
const {Schema} = mongoose;
//object.method('property')
// mongoose.connect('mongodb://localhost/animals');

// mongoose.connection.on('connected', () => console.log('connected'));

// const o = {
//     a: 'this is a',
//     b: 'this is b'
// };

// // const a = o.a;
// const { a: c, b } = o;

// console.log(c);

const animalSchema = new Schema({
    name: String, //constructors need to be capitalized in mongoose, otherwise it things it's a variable
    age: Number,
    numLegs: Number,
    eatsPeople: Boolean,
})
//model is a getter and setter
mongoose.model('Animal', animalSchema);
//setter above, setter below
const Animal = mongoose.model('Animal', animalSchema);

const animal = new Animal({
    name: 'Chewy',
    age: {
        type: Number,
        required: [true, 'age required'],
    },
    numLegs: {
        type: Number,
        required: [true, 'legs, 2 or more, required'],
        min: 2,
    },
    eatsPeople: {
        type: Boolean,
        default: false,
    },
});
const animal1 = new Animal({
    name: 'iguana',
    age: 8,
    numLegs: 4
})

// animal.save(function(error, savedAnimal){
//     console.log(error, savedAnimal)
// });
animal.save()
    .then(function(animal){
        console.log('animal saved', animal)
    })
    .catch(function(error){
        // console.log('err',error.errors.age.message);
        // const errors = [];
        // console.log(keys);
        const errors = Object.keys(error.errors).map(key => (error.errors[key].message));
        // for (let index=0; index<keys.length; index++){
        //     errors.push(error.errors[keys[index]].message);
        // }
        // response.render('index', { errors: Object.keys(error.errors).map(key => (error.errors[key].message))});
        console.log(errors);
    });
console.log(animal);