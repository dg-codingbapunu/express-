require('dotenv').config();

  const express = require('express');
    const morgan = require('morgan');
    const productRouter = require('./routes/product.js');

 
console.log(process.env.DB_PASSWORD);

  const server = express();
  // server.use(morgan('default'));
  server.use(express.json()); // body parser

    server.use(express.static(process.env.PUBLIC_DIR));// static hoisting middleware
   
   
    server.use('/products',productRouter.router); // middleware to attach router in server




   




  server.listen(process.env.PORT,() =>{
    console.log('server start');
    
  });
