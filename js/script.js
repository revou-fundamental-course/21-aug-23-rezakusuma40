let nameInput = document.getElementById('name-input');

function validateForm() {
    let errorCount=0;
    const name=document.forms['message-form']['message-name'].value;
    const birthDate=document.forms['message-form']['message-date'].value;
    const gender=document.forms['message-form']['message-gender'].value;
    const message=document.forms['message-form']['message-message'].value;

    if (name=='') {
        document.getElementById('alert-name').innerHTML='name must be filled!';
        ++errorCount
    } else {
        document.getElementById('alert-name').innerHTML='';
    }

    if (birthDate=='') {
        document.getElementById('alert-date').innerHTML='birth date must be filled!';
        ++errorCount
    } else {
        document.getElementById('alert-date').innerHTML='';
    }

    if (gender=='') {
        document.getElementById('alert-gender').innerHTML='pick a gender!';
        ++errorCount
    } else {
        document.getElementById('alert-gender').innerHTML='';
    }

    if (message=='') {
        document.getElementById('alert-message').innerHTML='write your message!';
        ++errorCount
    } else {
        document.getElementById('alert-message').innerHTML='';
    }

    if (errorCount>0) {
        return false;
    }

    showMessageData(name,birthDate,gender,message);
    swapDisplay();
    return false;
}

function showMessageData(name,birthDate,gender,message) {
    document.getElementById('name').innerHTML='Welcome to RevoAll, '+name+'!';
    document.getElementById('submitted-name').innerHTML=name;
    document.getElementById('submitted-date').innerHTML=birthDate;
    document.getElementById('submitted-gender').innerHTML=gender;
    document.getElementById('submitted-message').innerHTML=message;
}

function resend() {
    swapDisplay();
}

function swapDisplay() {
    const messageForm = document.getElementsByClassName('message-form')[0];
    const submittedInput = document.getElementById('submitted_data');
    
    messageForm.style.display = messageForm.style.display === 'none' ? 'flex' : 'none';
    submittedInput.style.display = submittedInput.style.display === 'none' ? 'block' : 'none';
}

var slideIndex=1;

function slider(n) {
    slideImage(slideIndex +=n);
}

function slideImage(n) {
    let imgList = document.getElementsByClassName('alumni-img');
    if (n>imgList.length) slideIndex=1;
    if (n<1) slideIndex=imgList.length;

    for(i=0;i<imgList.length; i++) {
        imgList[i].style.display ='none';
    }

    imgList[slideIndex-1].style.display="block";
}

setInterval(() => {
    slider(1);   
    }, 6000);