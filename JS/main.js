
//Changes wrapper every 10 seconds
  var x = document.getElementById("box-wrapper");
  var cycle = 0;
  var allBackgrounds = [ "url('/img/1.jpg')", "url('/img/2.jpg')", "url('/img/3.jpg')","url('/img/4.jpg')"];
    setInterval(function() {
    if (cycle < 4) {
      x.style.backgroundImage = allBackgrounds[cycle];
      cycle += 1;
    } else { 
      cycle = 0;
    }
  }, 8000);

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
  if (h >= 12){
    document.getElementById('Day').innerHTML = "Afternoon";
  } 
  if (h >= 17){
    document.getElementById('Day').innerHTML = "Evening";
  }
  if (h >= 24){
    document.getElementById('Day').innerHTML = "Morning";
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
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if(document.documentElement.clientWidth > 800){
          myNav.classList.add("nav-colored");
          myNav.classList.remove("nav-transparent");
        }
      
    }
    else if (document.body.scrollTop === 0) {
        if(document.documentElement.clientWidth > 800){
          myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
        }  
    }
};

//review carousel
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("review_slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 7000); 
}