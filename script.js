const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Toggle Menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  // Change icon from ☰ to X
  menuToggle.innerHTML = navMenu.classList.contains("active") ? "✕" : "☰";
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.innerHTML = "☰";
  });
});