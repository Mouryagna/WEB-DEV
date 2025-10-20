// event loop, async patterns, events emitter and strems do research if you want in deep
// event loop - allows to perform non blocking i/o operations 
// setIntervel,readFile,settimeout, server 
 const {readFile}= require('fs')

 console.log('started')
 readFile('./content/first.txt','utf8',(err,result)=> {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed')
 })
 console.log('end')

 const http=require('http')
 
 const server=http.createServer((res,req)=> {
     if(req.url==='/') {
         res.end('Home Page')
     }
     if(req.url==='/about') {
         for(let i=0;i<1000;i++) {
             for(letj=0;j<1000;j++) {
                 console.log(i,j)
             }
         }
     }
     res.end('Home Page')
 
 })
 
 server.listen(5005,()=> {
     console.log('server listening on port 5005......')
 })