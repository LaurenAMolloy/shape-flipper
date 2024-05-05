//Select the button and the giphy
const startButton = document.querySelector(".btn");
const giphy = document.querySelector(".giphy");
console.log(giphy);

//Change the innertext of the button
//hide the giphy
startButton.addEventListener ("click", function() {
  btn.innerText = "Click for a new shape!";
  giphy.classList.add("hide");
});

//get all the images
image_array = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
];

function get_random_image() {
  //get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  //get an image at the random_index
  selected_image = image_array[random_index];

  //Display the image
  document.getElementById("image_shower").src = `./img/${selected_image}`;
}




