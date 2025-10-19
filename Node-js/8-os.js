// build in modules
// os, path, FS, HTTP
const os=require('os')
const path=require('path')

// info about current user
const user= os.userInfo()
// console.log(user)

// method to returns system uptime
// console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS= {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);