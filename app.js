const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".links")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    
});