let contactForm = document.getElementById("contactForm")
let surname = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

//empecher le comportement par defaut du formulaire 
contactForm.addEventListener('submit', function(event){
event.preventDefault();

if(surname.value.trim() === '' || email.value.trim() ==='' || subject.value.trim() ==='' || message.value.trim()===''){
    surname.style.border = '1px solid red';
    email.style.border = '1px solid red';
    subject.style.border = '1px solid red';
    message.style.border = '1px solid red';
    return;
}
else{
    surname.style.border = '1px solid green';
    email.style.border = '1px solid green';
    subject.style.border = '1px solid green';
    message.style.border = '1px solid green';
    
}
contactForm.reset();
});



