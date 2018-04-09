const mongoose = require('mongoose');
const { Schema } = mongoose; //destructuring

const animalSchema = new Schema({
    name: String,
    age: Number,
    isAlive: {
        type: Boolean,
        default: true,
    },
    isEndangered: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Animal', animalSchema);