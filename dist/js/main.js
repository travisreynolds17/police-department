// simple image carousel

const imageMain = document.querySelector("#image-main");

// duration between image changes
const changeTime = 4000;
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
    if (count == imgClass.length) {
      count = 0;
    } else {
      count++;
    }
    // remove image classes
    for (let i = 0; i < imgClass.length; i++) {
      imageMain.classList.remove(imgClass[i]);
    }
    //add new image class
    imageMain.classList.add(imgClass[count]);
  }, changeTime);
}

init();
