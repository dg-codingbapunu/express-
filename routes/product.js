const express = require('express');
const productController = require('../controller/product');
const jwt = require('jwt');

const router = express.Router();

router
  .post('/', productController.createProduct)
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

exports.router = router;  