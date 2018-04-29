const mongoose = require('mongoose');
const { Schema } = mongoose; //destructuring

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
    },

    pages: Number,
    year: Number,

    publisher: String,
    genre: String,

    //making relationship between books and author
    author: { //field
        type: Schema.Types.ObjectId,
        ref: 'Author' //model name
    }
});

module.exports = mongoose.model('Book', bookSchema);