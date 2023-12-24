
// JavaScript to toggle the active class for the mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

// handle form submittion 
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation and error message display
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (name === '') {
      nameError.textContent = 'Please enter your name';
      return;
  }

  if (email === '') {
      emailError.textContent = 'Please enter your email';
      return;
  } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          emailError.textContent = 'Please enter a valid email address';
          return;
      }
  }

  if (message === '') {
      messageError.textContent = 'Please enter your message';
      return;
  }

  // If all validations pass
  alert('Form submitted successfully!');
});
