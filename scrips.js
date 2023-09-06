document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.querySelector("body");

  burgerMenu.addEventListener("click", function () {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      body.style.overflow = "auto";
    } else {
      mobileMenu.classList.add("active");
      body.style.overflow = "hidden";
    }
  });
});