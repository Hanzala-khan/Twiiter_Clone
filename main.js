// TOOLTIP FOR MENU 
const toggleUserIcon = document.getElementById('toggleUserIcon');
const toggleUserMenu = document.getElementById('toggleUserMenu');

// TOOLTIP VARIABLES
const toggleIcon = document.getElementById('toggleIcon');
const toggleDiv = document.getElementById('toggleDiv');

// INPUT FIELD VARIABLES
const inputField = document.getElementById("post_input_field");
const submitButton = document.getElementById("submitButton");



// EVENT FOR TOOLTIP
toggleIcon.addEventListener('click', function() {
    toggleDiv.style.display = toggleDiv.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', function(event) {
    if (!toggleDiv.contains(event.target) && event.target !== toggleIcon) {
        toggleDiv.style.display = 'none';
    }
});

// EVENT FOR MENU TOOLTIP
toggleUserIcon.addEventListener('click', function() {
    toggleUserMenu.style.display = toggleUserMenu.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', function(event) {
    if (!toggleUserMenu.contains(event.target) && event.target !== toggleUserIcon) {
        toggleUserMenu.style.display = 'none';
    }
});
// EVENT FOR INPUT FIELD VALIDATIONS
inputField.addEventListener("input", function() {
    if (inputField.value.length > 0) {
        submitButton.style.backgroundColor = "#17BF63"; // Change the button color to hover effect
    } else {
        submitButton.style.backgroundColor = "HSLA(200, 89%, 52%, .9)"; // Change the button color to red
    }
});


// VARIBALES FOR SCROLLING EFFECT
window.addEventListener('scroll', function() {
  var parentContainer = document.querySelector('.header_scrolling');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    parentContainer.classList.add('scrolled');
  } else {
    parentContainer.classList.remove('scrolled');
  }
});


