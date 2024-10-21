const fs = require('fs');


  const models = require('../models/product.js')

const Product = models.Product;

exports.createPost = (req,res)=> {

const product  = new Product();
product.title = "iphone 128",
product.rating = 9,
product.price= 90,
  

  res.status(201).json(req.body);
}




exports.getAllProducts = (req,res)=> {

  res.json(products) // read api Get /products
  
}


exports.getSingleProduct = (req,res)=> {

  const id = +req.params.id;
const product =   products.find(p=>p.id == id)

   res.json(product) // to read or get one product
  
}


 exports.replaceProduct = (req,res)=> {

  const id = +req.params.id;
const productIndex =   products.findIndex(p=>p.id === id)
products.splice(productIndex,1,{...req.body,id:id})


   res.status(201).json() ;
  
}



exports.deleteProduct = (req,res)=> {

  const id = + req.params.id;

  const productIndex = products.findIndex(p=> p.id === id)
   const product = products[productIndex]
  products.splice(productIndex,1)

  res.status(201).json(product)

}

