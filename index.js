const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

    // new  code -------////   ------------

  const express = require('express');


  const server = express();


  server.use((req,res,next) =>{

    console.log(req.method,req.ip,req.hostname,req.get('User-Agent'));
    next();

  })









 


  // API - endpoints - Route

  server.get('/',(req,res)=> {
    res.json({type:'GET'})
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
