const express = require('express');
const router = express.Router();
const controller = require('../controller/product.js')

router
.post('/',controller.createPost)// create

.get('/',controller.getAllProducts) // read all products

.get('/:id',controller.getSingleProduct) // read single product

.put('/:id',controller.replaceProduct) // update product


.delete('/:id',controller.deleteProduct) // delete product

exports.router = router;