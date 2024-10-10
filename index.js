
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const server = express();
// body parser
server.use(express.json());
server.use(express.static('public'))


  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8')); // Correct method name
  const products = data.products;



 
  
// } catch (err) {
//   console.error("Error reading or parsing the file:", err);
// }






// API- end point - route

// Products

server.get('/products',(req,res)=> {
    res.json(products)
})
server.get('/products/:id',(req,res)=> {
  res.json(products)
})
// create api / products
server.post('/',(req,res)=> {
  res.json(products)
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














// server.get('/demo',(req,res) =>{
// res.sendStatus(201)
//  res.send('hello')
  // res.sendFile('C:\Users\pp195\OneDrive\Desktop\express js\index.html');
// })





server.listen(8080, () => {
  console.log('server strated');
  
})