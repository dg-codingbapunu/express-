const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

    // new  code -------////   ------------

  const express = require('express');
    const morgan = require('morgan');

  const server = express();
  // server.use(morgan('default'));
  server.use(express.json()); // body parser

    server.use(express.static('public'));// static hoisting middleware

   // create/post/products


   server.post('/products',(req,res)=> {

    console.log(req.body);
    products.push(req.body);

    res.status(201).json(req.body);
  })


 

  // API - endpoints - Route

  // API ROOT, base URL

  server.get('/products',(req,res)=> {
   
    res.json(products) // read api Get /products
    
  })



  server.get('/products/:id',(req,res)=> {
   
    const id = +req.params.id;
  const product =   products.find(p=>p.id == id)

     res.json(product) // to read or get one product
    
  })
 


/// update api ???------PUT


server.put('/products/:id',(req,res)=> {
   
  const id = +req.params.id;
const productIndex =   products.findIndex(p=>p.id === id)
products.splice(productIndex,1,{...req.body,id:id})


   res.status(201).json() ;
  
})









 

// DELETE API

  server.delete('/products/:id',(req,res)=> {

    const id = + req.params.id;

    const productIndex = products.findIndex(p=> p.id === id)
     const product = products[productIndex]
    products.splice(productIndex,1)

    res.status(201).json(product)

  })





 























    server.get('/demo',(req,res)=>{

      // res.sendStatus(200);

      // res.json(products);

      // res.send('<h1>hello</h1>');

      // res.sendFile('C:\Users\pp195\OneDrive\Desktop\express js\index.html');

    })









  server.listen(8080,() =>{
    console.log('server start');
    
  });
