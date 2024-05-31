var modal = document.getElementById("myModal");
var btn = document.getElementById("loginBtn");
var input = document.getElementById("password");
var eye = document.getElementById("eye");

input.classList.add("modal__input--hidden");

btn.onclick = function () {
  modal.style.display = "flex";
};

eye.onclick = function () {
  if (input.type === "password") {
    input.type = "text";
    eye.src = "/assets/icons/Eye.svg";
  } else {
    input.type = "password";
    eye.src = "/assets/icons/CloseEye.svg";
  }
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
