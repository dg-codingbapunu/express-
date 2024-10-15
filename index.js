const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

    // new  code -------////   ------------

  const express = require('express');

  const server = express();

    server.get('/',(req,res)=>{

      // res.sendStatus(200);

      res.json(products);

      // res.send('<h1>hello</h1>');

      // res.sendFile('C:\Users\pp195\OneDrive\Desktop\express js\index.html');

    })









  server.listen(8080,() =>{
    console.log('server start');
    
  });
