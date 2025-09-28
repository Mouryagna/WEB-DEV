// Node runs on a server- not in a browser
// the console is the terminal window 
// global object instead of window object
// Has Common core Modules that we will Explore
// CommonJS modules instead of ES6 modules
const num=12

if(num<10) {
    console.log("Small NUmber");
}
else {
    console.log('large Number');
}
console.log("First Node Js ") 

console.log(global)

const os=require('os');
const path= require('path')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.dirname(__filename))