const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Category = require('../models/category')
const Product = require('../models/product')
const keys = require('../keys/keys')

let getUser = function (token) {
    if (!token) throw new Error('No token');
    const user = jwt.verify(token, keys.jwtSecret);
    return user;
}

// categories
module.exports.getCategories = async (req, res) => {
    try {
        getUser(req.body.token) // throws an error if what :)
        const categoriesDb = await Category.find()
        res.status(200).json({ message: categoriesDb })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports.getCategoryById = async (req, res) => {
    try {
        getUser(req.body.token) // throws an error if what :)
        const categoryDb = await Category.findOne({ _id: req.params.id })
        res.status(200).json({ message: categoryDb })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports.createCategory = async (req, res) => {
    try {
        getUser(req.body.token)
        const newCategory = new Category({
            name: req.body.name,
            description: req.body.description
        })
        await newCategory.save()
        res.status(201).json({ message: 'Added' })
    }
    catch (err) {
        res.status(500).json({ message: `Error creating category!` })
    }
}

module.exports.updateCategoryById = async (req, res) => {
    try {
        getUser(req.body.token)
        const categoryDb = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description
            },
            { new: true }
        )
        if (categoryDb) {
            res.status(201).json({ message: 'Updated!' })
        }
        else {
            res.status(500).json({ message: 'Error updating category!' })
        }
    }
    catch (err) {
        res.status(500).json({ message: `Error updating category!` })
    }
}

module.exports.deleteCategoryById = async (req, res) => {
    try {
        getUser(req.body.token)
        const categoryDb = await Category.findByIdAndDelete(req.params.id)
        if (categoryDb) {
            res.status(201).json({ message: 'Deleted!' })
        }
        else {
            res.status(500).json({ message: 'Error deleting category!' })
        }
    }
    catch (err) {
        res.status(500).json({ message: `Error deleting category!` })
    }
}




// products
module.exports.getProducts = async (req, res) => {
    try {
        getUser(req.body.token)
        const productsDb = await Product.find()
        res.status(200).json({ message: productsDb })
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports.getProductById = async (req, res) => {
    try {
        getUser(req.body.token)
        const productDb = await Product.findById(req.params.id)
        if (!productDb) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json({ message: productDb })
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports.createProduct = async (req, res) => {
    try {
        getUser(req.body.token)
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            categoryId: req.body.categoryId
        })
        await newProduct.save()
        res.status(201).json({ message: 'Added' })
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports.updateProductById = async (req, res) => {
    try {
        getUser(req.body.token)
        const productDb = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                categoryId: req.body.categoryId
            },
            { new: true }
        )
        if (!productDb) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json({ message: 'Updated!' })
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports.deleteProductById = async (req, res) => {
    try {
        getUser(req.body.token)
        const productDb = await Product.findByIdAndDelete(req.params.id)
        if (!productDb) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json({ message: 'Deleted!' })
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}