console.log("hello");
const express = require('express');

const server = express();
server.use(express.json());
server.use((req,res,next)=> {
  console.log(req.method,req.ip,req.hostname,new Date(),req.get('User-Agent'));
  next();
  
});

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