// Burger menu animation

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector("#navmenu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    $('#navmenu').fadeToggle(300);
  })