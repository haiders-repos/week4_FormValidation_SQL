const firstname=document.getElementById('name');
const surname=document.getElementById('surname');
const mail=document.getElementById('usermail');
const message=document.getElementById('usermessage');
const form=document.getElementById('contact-form');
const nameErrorElement=document.getElementById('nameError');
const surnameErrorElement=document.getElementById('surnameError');
const mailErrorElement=document.getElementById('mailError');
const messageErrorElement=document.getElementById('messageError');


form.addEventListener('submit',(e)=>{
    // let messages=[];

    if(firstname.value ==='' || firstname.value==null ){
        e.preventDefault();
        nameErrorElement.innerText="First Name Is Required"
    }

    if(firstname.value  != '' ){
       
        nameErrorElement.innerText='';
    }

    if(surname.value==='' || surname.value==null ){
        e.preventDefault();
        surnameErrorElement.innerText="Surname Is Required"
    }

    if(surname.value  != '' ){
        
        surnameErrorElement.innerText='';
    }

    if(mail.value==='' || mail.value==null ){
        e.preventDefault();
        mailErrorElement.innerText="Email Is Required"
    }

    if(mail.value  != '' ){
       
        mailErrorElement.innerText='';
    }

  
    if(message.value==='' || message.value==null ){
        e.preventDefault();
        messageErrorElement.innerText="Please provide information about your query."
        
    }

    if(message.value  != '' ){
        
        messageErrorElement.innerText='';
    }
   
})
    
