document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.style.transform = "scale(1.1)";
    });
    section.addEventListener("mouseleave", () => {
      section.style.transform = "scale(1)";
    });
  });
});
