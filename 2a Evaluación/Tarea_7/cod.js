document.getElementsByTagName('nav')[0].addEventListener('click', function(evt) {
    this.classList.toggle('showArticle');
});

function openNav() {
    document.getElementById("ul").style.width = "250px";
    document.getElementsByTagName("body").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("ul").style.width = "0";
    document.getElementsByTagName("body").style.marginLeft= "0";
    }
