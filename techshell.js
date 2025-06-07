// Wait for the DOM to load fully
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate On Scroll)
  AOS.init();

  // Typed.js Hero Text Animation
  new Typed("#typed", {
    strings: ["Welcome to TechShell-Soft", "We Build Future-Ready Solutions"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
});
