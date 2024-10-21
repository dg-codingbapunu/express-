require('dotenv').config();

  const express = require('express');
  const server = express();
    const morgan = require('morgan');
    const mongoose = require('mongoose');
    const { Schema } = mongoose; 
    const productRouter = require('./routes/product.js');
const userRouter = require('./routes/user.js');
 
console.log(process.env.DB_PASSWORD);


//  db connection code

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database secure');
  
}

  // Schema
  const productSchema = new Schema({

    title: String,
    description:  String,
    price: Number,
    discountPercentage:Number,
    rating: Number,
   
    brand:  String,
    category:  String,

    thumbnail: String,
      images: [ String]
      










    
  });

 
  // server.use(morgan('default'));
  server.use(express.json()); // body parser

    server.use(express.static(process.env.PUBLIC_DIR));// static hoisting middleware
   
   
    server.use('/products',productRouter.router); // middleware to attach router in server
    server.use('/users',userRouter.router);



   




  server.listen(process.env.PORT,() =>{
    console.log('server start');
    
  });
