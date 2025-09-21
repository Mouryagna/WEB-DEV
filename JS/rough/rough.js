document.getElementById('myform').addEventListener('submit',(event)=> {
    event.preventDefault();
    let emailCheck=document.myfrom.mail.value;
    if(emailCheck.indexOf('@')!==-1 && emailCheck.indexOf('.')!==-1) {
        document.querySelector('.display').innerHTML="valid";
    }
    else {
        document.querySelector('.display').innerHTML="invalid";
    }
})