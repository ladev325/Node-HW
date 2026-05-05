const mongoose = require('mongoose');
const { Schema, Types: { ObjectId } } = mongoose  // ObjectId не з js

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
        required: true,
        ref: 'categories' // gets full category data in response
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('products', productSchema)