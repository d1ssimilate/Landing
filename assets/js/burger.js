const burgerIcon = document.getElementById("burgerIcon");
const menu = document.getElementById("menu");

burgerIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});
