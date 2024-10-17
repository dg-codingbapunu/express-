
const controller = require('./controller/product.js')
  const express = require('express');
    const morgan = require('morgan');

  const server = express();
  // server.use(morgan('default'));
  server.use(express.json()); // body parser

    server.use(express.static('public'));// static hoisting middleware





   // create/post/products


  server.post('/products',controller.createPost); // create

  server.get('/products',controller.getAllProducts); // read all products

  server.get('/products/:id',controller.getSingleProduct) // read single product

  server.put('/products/:id',controller.replaceProduct); // update product


  server.delete('/products/:id',controller.deleteProduct) // delete product




  server.listen(8080,() =>{
    console.log('server start');
    
  });
