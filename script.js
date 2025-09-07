// AOS Animation
AOS.init({ duration: 1000, once: true });

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Active Navigation Links
const navlinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navlinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Mobile Menu Toggle
const header = document.querySelector("header");
const nav = document.querySelector("nav");

// Create hamburger button
const hamburger = document.createElement("button");
hamburger.innerHTML = '<i class="fas fa-bars"></i>';
hamburger.id = "hamburgerBtn";
header.insertBefore(hamburger, nav);

// Toggle menu
hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburger.innerHTML = nav.classList.contains("show")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
