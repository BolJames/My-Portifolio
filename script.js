// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ==============================
// HAMBURGER MENU
// ==============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
