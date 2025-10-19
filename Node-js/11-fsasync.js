const {readFile,writeFile, read}= require('fs');
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=> {
    if(err) {
        console.log(err);
        return
    }
    const first=result;
    console.log('heehehehe')
    readFile('./content/second.txt','utf8',(err,result)=> {
        if(err) {
            console.log(err);
            return
        }
        const second= result;
        writeFile(
            './content/result.txt',
            `here is the result: ${first}, ${second}`,
            {flag: 'a'},(err,result) => {
                if(err) {
                    console.log(err);
                    return
                }
                console.log('result is done')
            }
        )
    })
})
console.log('blabla')