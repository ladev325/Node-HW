const mongoose = require('mongoose');
const category = require('./category');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    categoryId: {
        type: ObjectId,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('products', productSchema)