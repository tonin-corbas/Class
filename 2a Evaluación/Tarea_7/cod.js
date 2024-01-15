function openNav() {
    document.getElementById("ul").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("ul").style.width = "0";
    }

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}