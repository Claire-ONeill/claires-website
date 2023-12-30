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

  document.querySelectorAll('.mobile-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('check').checked = false;
    });
});
  
