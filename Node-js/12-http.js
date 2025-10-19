// HTTP
const http= require('http');

const server= http.createServer((req,res)=> {
    if(req.url==='/') {
        res.end('welcome to our home page');
    }
    if(req.url==='/about') {
        res.end('this is about');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>there is no page</p>
        <a href='/'>back</a>
    `)
})

server.listen(5000);
