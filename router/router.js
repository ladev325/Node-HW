const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth')
const systemController = require('../controllers/system')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/categories', systemController.getCategories)
router.get('/categories/:id', systemController.getCategoryById)
router.post('/categories', systemController.createCategory)
router.patch('/categories/:id', systemController.updateCategoryById)
router.delete('/categories/:id', systemController.deleteCategoryById)

router.get('/products', systemController.getProducts)
router.get('/products/:id', systemController.getProductById)
router.post('/products', systemController.createProduct)
router.patch('/products/:id', systemController.updateProductById)
router.delete('/products/:id', systemController.deleteProductById)


module.exports = router;