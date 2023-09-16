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

// Get the mobile menu element
const mobileMenu = document.getElementById('mobile-menu');

// Get the buttons wrapper element
const buttonsWrapper = document.querySelector('.buttons-wrapper');

// Function to hide the mobile menu
function hideMobileMenu() {
  mobileMenu.classList.remove('active');
}

// Add an event listener to the entire mobile menu for clicks
mobileMenu.addEventListener('click', function(event) {
  // If the clicked element is NOT part of the buttons wrapper, close the menu
  if (!buttonsWrapper.contains(event.target)) {
    hideMobileMenu();
  }
});
