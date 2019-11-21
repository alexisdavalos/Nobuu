// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 15000); // Change image every 6 seconds
// } 

//Typed JS 
var typed = new Typed('#typed', {
    strings: ['Positivity', 'Motivation', 'News', 'Alerts'],
    backSpeed: 80,
    typeSpeed: 80,
    loop: true
});

//mobile menu
function myFunction() {

  var x = document.getElementById("mobile-links");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//clock 
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m ;
  var t = setTimeout(startTime, 500);
  if (h > 12){
    document.getElementById('Day').innerHTML = "Afternoon"
  } 
  if (h > 17){
    document.getElementById('Day').innerHTML = "Evening"
  }
  if (h > 24){
    document.getElementById('Day').innerHTML = "Morning"
  }
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// scroll nav bar
var myNav = document.getElementById('navBar');
window.onscroll = function () { 
    'use strict';
    if (window.scrollTop >= 50) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }

    
};
