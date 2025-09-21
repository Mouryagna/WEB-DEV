import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
/*
// 2021-02-08T03:08:30+05:30 - ISO 8601 standard 
console.log(dayjs().format()); 
  
// 08 February 2021, 03:08:30 AM 
console.log(dayjs().format('DD MMMM YYYY, hh:mm:ss A'));  
  
// 08-02-2021 
console.log(dayjs().format('DD-MM-YYYY')); 
  
// Monday 
console.log(dayjs().format('dddd'));  
  
// Feb 
console.log(dayjs().format('MMM')); 
    
// Feb 8th,21  
console.log(dayjs().format("MMM D[th],YY"));  
*/
function compareTime(zoneTime) {
    let compareDate=dayjs().format('DD');
    if(zoneTime === compareDate) {
        return 'Today';
    }
    else if(zoneTime >compareDate) {
        return 'Tomorrow';
    }
    else {
        return 'Yesterday';
    }
}
function standarTime() {
    let time=dayjs().format('hh:mm:ss A');
    document.querySelector('.time').innerHTML=time;
    let year=dayjs().format('YYYY');
    document.querySelector('.year').innerHTML=year;
    let date=dayjs().format('DD');
    document.querySelector('.date').innerHTML=date;
    let month=dayjs().format('MMMM');
    document.querySelector('.month').innerHTML=`,${month}`;
    let day=dayjs().format('dddd');
    document.querySelector('.day').innerHTML=day;
}
function kolTime() {
    let zoneTime=dayjs().format('DD');
    let locTime=dayjs().format('hh:mm A');
    document.querySelector('.kol-time').innerHTML=locTime;
    document.querySelector('.kol').innerHTML=compareTime(zoneTime);
}
function lonTime() {
    let zoneTime=dayjs().subtract(5,'hour').subtract(30,'minute').format('DD');
    let locTime=dayjs().subtract(5,'hour').subtract(30,'minute').format('hh:mm A');
    document.querySelector('.lon-time').innerHTML=locTime;
    document.querySelector('.lon').innerHTML=`${compareTime(zoneTime)}, +5.5 h`;
}
function synTime() {
    let zoneTime=dayjs().add(5,'hour').add(30,'minute').format('DD');
    let locTime=dayjs().add(5,'hour').add(30,'minute').format('hh:mm A');
    document.querySelector('.syn-time').innerHTML=locTime;
    document.querySelector('.syn').innerHTML=`${compareTime(zoneTime)}, -5.5 h`;
}
function nyTime() {
    let zoneTime=dayjs().subtract(9,'hour').subtract(30,'minute').format('DD');
    let locTime=dayjs().subtract(9,'hour').subtract(30,'minute').format('hh:mm A');
    document.querySelector('.ny-time').innerHTML=locTime;
    document.querySelector('.ny').innerHTML=`${compareTime(zoneTime)}, -9.5 h`;
}
setInterval(()=> {
    standarTime();
    kolTime();
    lonTime();
    synTime();
    nyTime();
},1000);
