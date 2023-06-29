const express=require('express');
const http=require('http');

const hostname='localhost';
const port=4000;

const app=express();
app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello World this is the express server side and your server is ready</h1>');
});
const server=http.createServer(app);

server.listen(port,hostname,()=>{
 console.log(`Server running at http://${hostname}:${port}/`);
});
