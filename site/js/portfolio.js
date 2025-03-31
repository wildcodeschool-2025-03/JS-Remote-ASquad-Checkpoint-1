// Step 1 JS

const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

// Step 2 JS

const button = document.querySelector("#button");
const name = document.querySelector("#firstname");
const pinkBackground = document.querySelector(".pink-bg");

button.addEventListener("click", () => {
  const newName = prompt("Enter your name");

  if (newName) {
    name.textContent = newName;
    name.style.color = "white";

    // Step 3 JS

    const newColor = prompt("Enter a color");
    if (newColor) {
      pinkBackground.style.backgroundColor = newColor;
    }
  }
});
