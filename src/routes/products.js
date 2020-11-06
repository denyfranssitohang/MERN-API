const express = require('express');
// const app = express();

const router = express.Router();

/* CREATE -> post */
const productsController = require('../controllers/products');
router.post('/product', productsController.createProduct);

/* READ -> get */
router.get('/product', productsController.getAllProduct);

module.exports = router;