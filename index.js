console.log("hello");
const express = require('express');
const morgan = require('morgan');
const server = express();
server.use(express.json());


server.use(morgan('public'));
server.use(express.static('public'));



const auth = (req,res,next) => {

if(req.body.password == '123'){
  next();
} else{
  res.sendStatus(401)
}


}



// API- end point - route

server.get('/',auth,(req,res)=> {
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














// server.get('/demo',(req,res) =>{
// res.sendStatus(201)
//  res.send('hello')
  // res.sendFile('C:\Users\pp195\OneDrive\Desktop\express js\index.html');
// })





server.listen(8080, () => {
  console.log('server strated');
  
})