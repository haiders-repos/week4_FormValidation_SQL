const name=document.getElementById('name');
const form=document.getElementById('contact-form');
const errorElement=document.getElementById('error');

form.addEventListener('submit',(e)=>{
    let messages=[];

    if(name.value==='' || name.value==null ){
        messages.push('Name Is Required');
    }

    if(messages.length>0){
    e.preventDefault();
    errorElement.innerText=messages.join(",");
    }

   
})
    
