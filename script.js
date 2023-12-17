// JavaScript using modulo operator (with remainder to set index value for the loop)
const images = ["image1.png", "image2.png", "image3.png", "image4.png"]; // Our image array with values 0, 1, 2 and 3
let currentIndex = 0; // sets initial Index value
const slideshowImage = document.getElementById("slideshow-image"); // Gets the element from the HTML, by ID
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function showImage(index) {
  currentIndex = (index + images.length) % images.length; //  images.length = the total number of images in the array (4). Uses the "modulo" operator (divider), with remainders.
  const imagePath = "images/" + images[currentIndex];
  slideshowImage.src = imagePath;
  slideshowImage.alt = `Image ${currentIndex + 1}`;
}

prevButton.addEventListener("click", () => showImage(currentIndex - 1));
nextButton.addEventListener("click", () => showImage(currentIndex + 1));
// A click either in- or decreses the index value by 1

showImage(currentIndex); // Shows the image connected to the current Index (img1 = index 0, img2 = 1, img3 = 2, img4 = 3)
