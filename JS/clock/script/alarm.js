import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

setInterval(()=> {
    const time=dayjs().format('hh:mm:ss A');
    document.querySelector('.time').innerHTML=time;
},1000);
document.querySelector('.set-alarm').addEventListener('click',()=> {
    
})