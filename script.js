// Fonction pour afficher le contenu de l'onglet sélectionné 1er niveau
function openTab1(tabName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
  // Masquer tous les contenus des onglets du 1er niveau
  var tabcontent = document.getElementsByClassName("tabcontent1");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
});


//pour les batiments industrielles 2eme niveau
function openTab2(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//cette fonction pour masquer les onglets non actifs, pour les onglets des batiments industriels
document.addEventListener("DOMContentLoaded", function() {
  // Masquer tous les contenus des onglets
  var tabcontent = document.getElementsByClassName("tabcontent2");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
});

//Fonction pour avoir les boutons figés des batiments indus (onglets)
// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}//fin fonction 


//fonction carrousell des batiments
