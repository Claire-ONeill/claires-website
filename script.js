const form = document.querySelector('form'); 
const NAME = document.getElementById("name"); 
const EMAIL = document.getElementById("email"); 
const PHONE = document.getElementById("phone"); 
const SUBJECT = document.getElementById("subject"); 
const BODY = document.getElementById("message"); 

function sendEmail(){
  const MESSAGE = `Full Name: ${NAME.value}<br> Email: ${EMAIL.value}<br> 
  Phone: ${PHONE.value}<br> Subject: ${BODY.value}<br> `;

  EMAIL.send({
    encryptedToken: "b5bbe703-19cd-4873-b197-350234145cf5", 
    Host: "smtp.elasticemail.com", 
    Username: USER, 
    Password: PASS, 
    To: USER, 
    From: "you@isp.com", 
    Subject: SUBJECT.value, 
    Body: MESSAGE
  }).then(
    message=>{
      if (message == "OK"){
        Swal.fire({
          title: "Success!",
          text: "Message sent!",
          icon: "success"
        });
      }
    }
  )
}
function checkInputs(){ 
  const items = document.querySelectorAll(".item"); 
  for (const item of items){
    if (item.value ==""){
      item.classList.add("error")
      item.parentElement.classList.add("error"); 
    }
    if (items[1].value != ""){
      checkEmail(); 
    }
    items[1].addEventListener("keyup", () =>{
      checkEmail(); 
    })
    item.addEventListener("keyup", ()=> {
      if (item.value != ""){
        item.classList.remove("error")
        item.parentElement.classList.remove("error"); 
      }
      else{
        item.classList.add("error"); 
        item.parentElement.classList.add("error"); 
      }
    })
  }
}
function checkEmail(){
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\/[a-z]{2,3})?$/;
  if (!EMAIL.value.match(emailRegex)){
    EMAIL.classList.add("error"); 
    EMAIL.parentElement.classList.add("error"); 
  }
  else{
    EMAIL.classList.remove("error"); 
    EMAIL.parentElement.classList.remove("error"); 
  }
}
form.addEventListener("submit", (e) =>{
  e.preventDefault(); 
  checkInputs(); 

  if (!NAME.classList.contains("error") && !EMAIL.classList.contains("error") && !PHONE.classList.contains("error")
    && !SUBJECT.classList.contains("error") && !BODY.classList.contains("error")){
      sendEmail(); 
      form.reset(); 
      return false; 
  }

  // sendEmail(); 
}); 