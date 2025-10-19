const {readFileSync,writeFileSync, read}= require('fs');
console.log('start')
const first =readFileSync('./content/first.txt','utf8');
const second =readFileSync('./content/second.txt','utf8');


writeFileSync(
    './content/result.txt',
    `Here is the Result\n ${first}, ${second}`,
    {flag: 'a'}
)
console.log('abc');
console.log('xyz');