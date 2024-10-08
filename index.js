console.log("hello");
const express = require('express');

const server = express();



server.get('/',(req,res) =>{

  res.json(data)
  // res.sendFile('C:\Users\pp195\OneDrive\Desktop\express js\index.html');
})





server.listen(8080, () => {
  console.log('server strated');
  
})