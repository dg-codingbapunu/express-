

    // new  code -------////   ------------

  const express = require('express');
    const morgan = require('morgan');

  const server = express();
  // server.use(morgan('default'));
  server.use(express.json()); // body parser

    server.use(express.static('public'));// static hoisting middleware





   // create/post/products


  server.post('/products',createPost); // create

  server.get('/products',getAllProducts); // read all products

  server.get('/products/:id',getSingleProduct) // read single product

  server.put('/products/:id',replaceProduct); // update product


  server.delete('/products/:id',deleteProduct) // delete product





 















  server.listen(8080,() =>{
    console.log('server start');
    
  });
