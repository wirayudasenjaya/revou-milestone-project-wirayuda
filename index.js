var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 

    if (this.classList.contains("active")) {
      document.getElementById("chevron").style.transform = "rotate(-45deg)";
      document.getElementById("chevron-in").style.transform = "rotate(-45deg)";
    } else {
      document.getElementById("chevron").style.transform = "rotate(135deg)";
      document.getElementById("chevron-in").style.transform = "rotate(135deg)";
    }
  });
}

function openNav() {
  document.getElementById("sidenav").style.width = "300px";
  document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("overlay").style.zIndex = "99";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("overlay").style.zIndex = "-99";
}