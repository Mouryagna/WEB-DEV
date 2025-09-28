const http=require('http');
const server=http.createServer((req,res)=> {
    if(req.url==='/') {
         res.end('Welcome to our Home Page');
    }
   
    if(req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`
        <h1>oops!</h1>
        <p>we can't see</p>
        <a herf="/">back home</a>
        `)
})

server.listen(5000);