const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    this.classList.add('active');

    // Get the href attribute of the clicked link
    const page = this.getAttribute('href');

    // Navigate to the associated HTML page
    setTimeout(function() {
      window.location.href = page;
    }, 500); // Delay for 500 milliseconds (optional, for better visual feedback)
    
    // Prevent the default behavior of the link (preventing the page from reloading)
    event.preventDefault();
  });
});
