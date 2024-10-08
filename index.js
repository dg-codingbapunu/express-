console.log("hello");
const express = require('express');

const server = express();



server.get('/',(req,res) =>{
  res.send('hello boss');
})





server.listen(8080, () => {
  console.log('server strated');
  
})