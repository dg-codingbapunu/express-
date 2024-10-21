const express = require('express');
const router = express.Router();
const userController = require('../controller/user.js');

router
.post('/',userController.createPost)// create

.get('/',userController.getAllProducts) // read all products

.get('/:id',userController.getSingleProduct) // read single product

.put('/:id',userController.replaceProduct) // update product


.delete('/:id',userController.deleteProduct) // delete product

exports.router = router;