const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
