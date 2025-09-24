const os= require('os')
// info about current user

const user= os.userInfo()
console.log(user)

// method return the system in sec
console.log('Uptime '+ os.uptime)

const currentOs= {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)