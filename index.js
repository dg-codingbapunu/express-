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

  server.post('/',(req,res)=> {
    res.json({type:'POST'})
  })


  server.put('/',(req,res)=> {
    res.json({type:'PUT'})
  })




  server.delete('/',(req,res)=> {
    res.json({type:'DELETE'})
  })





  server.patch('/',(req,res)=> {
    res.json({type:'PATCH'})
  }),
























    server.get('/demo',(req,res)=>{

      // res.sendStatus(200);

      // res.json(products);

      // res.send('<h1>hello</h1>');

      // res.sendFile('C:\Users\pp195\OneDrive\Desktop\express js\index.html');

    })









  server.listen(8080,() =>{
    console.log('server start');
    
  });
