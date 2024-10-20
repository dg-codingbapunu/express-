require('dotenv').config();
const controller = require('./controller/product.js')
  const express = require('express');
    const morgan = require('morgan');

 
console.log(process.env.DB_PASSWORD);

  const server = express();
  // server.use(morgan('default'));
  server.use(express.json()); // body parser

    server.use(express.static(process.env.PUBLIC_DIR));// static hoisting middleware
    const productRouter = express.Router();
   
    server.use('/',productRouter);




   // create/post/products

   productRouter
  .post('/products',controller.createPost)// create

  .get('/products',controller.getAllProducts) // read all products

  .get('/products/:id',controller.getSingleProduct) // read single product

  .put('/products/:id',controller.replaceProduct) // update product


.delete('/products/:id',controller.deleteProduct) // delete product




  server.listen(process.env.PORT,() =>{
    console.log('server start');
    
  });
