// Select the button element
let btn = document.querySelector("button");

// Add an event listener to the button
btn.addEventListener("click", function () {
  // Select the h3 element
  let h3 = document.querySelector("h3");
  // Generate a random color
  let randomColor = getRandomColor();
  // Set the text of the h3 element to the random color
  h3.innerText = randomColor;

  // Select the div element
  let div = document.querySelector("div");
  // Set the background color of the div element to the random color
  div.style.backgroundColor = randomColor;

  // Log a message to the console
  console.log("color updated");
});

// Function to generate a random color
function getRandomColor() {
  // Generate a random number between 0 and 255 for the red, green, and blue values
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  // Combine the red, green, and blue values into a string in the format "rgb(red, green, blue)"
  let color = `rgb(${red}, ${green}, ${blue})`;
  // Return the random color
  return color;
}