// simple image carousel

const imageMain = document.querySelector("#image-main");
const navLinks = document.querySelector(".nav-links");
const navLogo = document.querySelector(".nav-logo");

// duration between image changes
const changeTime = 3000;
// to store current class of main image
let count = 0;

// to store names of CSS classes. We'll transition the images by using JS to change the main image's class,
// so we can use transition effects
// Additionally, page will start with imgClass[0] selected

let imgClass = ["one", "two", "three", "four", "five", "six", "seven"];

function init() {
  //set default image
  imageMain.classList.add(imgClass[0]);
  window.setTimeout(() => {
    startCarousel();
  }, changeTime);
}

function startCarousel() {
  window.setInterval(() => {
    count++;

    if (count === imgClass.length) {
      count = 0;
    }
    // remove image classes
    for (let i = 0; i <= imgClass.length; i++) {
      imageMain.classList.remove(imgClass[i]);
    }
    //add new image class

    imageMain.classList.add(imgClass[count]);
  }, changeTime);
}

// scroll event that changes navbar to sticky nav

window.addEventListener("scroll", function(e) {
  // reduce performance load
  requestAnimationFrame(function() {
    if (window.pageYOffset > navLinks.offsetTop + 100) {
      navLinks.classList.add("sticky");
      // replace image logo with text
      navLogo.innerHTML = "{City Name} P.D.";
    } else {
      navLinks.classList.remove("sticky");
      // restore image logo
      navLogo.innerHTML =
        "<img src='dist/img/badge-template.png' alt='police-badge-logo'>";
    }
  });
});

init();
