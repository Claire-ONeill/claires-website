// const form = document.querySelector('form'); 
// const NAME = document.getElementById("name"); 
// const EMAIL = document.getElementById("email"); 
// const PHONE = document.getElementById("phone"); 
// const SUBJECT = document.getElementById("subject"); 
// const BODY = document.getElementById("message"); 

// function sendEmail(){
//   const MESSAGE = `Full Name: ${NAME.value}<br> Email: ${EMAIL.value}<br> 
//   Phone: ${PHONE.value}<br> Subject: ${BODY.value}<br> `;

//   EMAIL.sendEmail({
//     encryptedToken: "b5bbe703-19cd-4873-b197-350234145cf5", 
//     Host: "smtp.elasticemail.com", 
//     Username: "cconeill@umich.edu", 
//     To: "cconeill@umich.edu", 
//     From: "you@isp.com", 
//     Subject: SUBJECT.value, 
//     Body: MESSAGE
//   }).then(
//     message=>{
//       if (message == "OK"){
//         Swal.fire({
//           title: "Success!",
//           text: "Message sent!",
//           icon: "success"
//         });
//       }
//     }
//   )
// }
// function checkInputs(){ 
//   const items = document.querySelectorAll(".item"); 
//   for (const item of items){
//     if (item.value ==""){
//       item.classList.add("error")
//       item.parentElement.classList.add("error"); 
//     }
//     if (items[1].value != ""){
//       checkEmail(); 
//     }
//     items[1].addEventListener("keyup", () =>{
//       checkEmail(); 
//     })
//     item.addEventListener("keyup", ()=> {
//       if (item.value != ""){
//         item.classList.remove("error")
//         item.parentElement.classList.remove("error"); 
//       }
//       else{
//         item.classList.add("error"); 
//         item.parentElement.classList.add("error"); 
//       }
//     })
//   }
// }
// function checkEmail(){
//   const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\/[a-z]{2,3})?$/;
//   if (!EMAIL.value.match(emailRegex)){
//     EMAIL.classList.add("error"); 
//     EMAIL.parentElement.classList.add("error"); 
//   }
//   else{
//     EMAIL.classList.remove("error"); 
//     EMAIL.parentElement.classList.remove("error"); 
//   }
// }
// form.addEventListener("submit", (e) =>{
//   e.preventDefault(); 
//   checkInputs(); 

//   if (!NAME.classList.contains("error") && !EMAIL.classList.contains("error") && !PHONE.classList.contains("error")
//     && !SUBJECT.classList.contains("error") && !BODY.classList.contains("error")){
//       sendEmail(); 
//       form.reset(); 
//       return false; 
//   }

//   // sendEmail(); 
// }); 
// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('contactForm');

//   form.addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const formAction = form.getAttribute('action');

//     try {
//       const response = await fetch(formAction, {
//         method: 'POST',
//         body: formData,
//         headers: {
//           Accept: 'application/json'
//         }
//       });

//       if (response.ok) {
//         form.reset(); // Reset the form upon successful submission
//         alert('Message sent!'); // Show a success message
//       } else {
//         throw new Error('Network response was not ok.');
//       }
//     } catch (error) {
//       console.error('There was an error!', error);
//       // Handle errors here (e.g., show an error message to the user)
//     }
//   });
// });
// Get the tree image element
// Function to check scroll position and apply changes to the tree image
// Function to check if the element is in the viewport
// Function to check if the element is in the viewport
// Function to handle scroll and trigger image visibility
// Function to handle scroll and trigger image visibility
// Function to handle scroll and trigger image visibility

// Visibility bottom tree image 
function handleScrollTree() {
    const treeImage = document.querySelector('.interactive-tree');
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight; 
    const scrollPosition = window.scrollY || window.pageYOffset;

    const threshold = windowHeight * 0.8; 
    let opacity = 0;

    if (scrollPosition > docHeight - (windowHeight + threshold)) {
        opacity = 1 - ((docHeight - (scrollPosition + windowHeight)) / threshold);
    }

    treeImage.style.opacity = opacity;
}

window.addEventListener('scroll', handleScrollTree);
window.addEventListener('touchmove', handleScrollTree);

handleScrollTree();

// Projects menu: filter application
// Get the select element
// Get the select element
const categoryFilter = document.getElementById('category-filter');
// Get the projects container
const projectsContainer = document.getElementById('projects-container');
// Get all project boxes
const projectBoxes = document.querySelectorAll('.projects-box');

// Add event listener to the select element for filtering
// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links-projects a");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const category = link.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        const projects = document.querySelectorAll(".projects-box");
  
        projects.forEach(function (project) {
          const projectCategories = project.getAttribute("data-category").split(' ');
  
          if (category === "all" || projectCategories.includes(category)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
  
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active");
        });
  
        link.classList.add("active");
      });
    });
  });

  
  


