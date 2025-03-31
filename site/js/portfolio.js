// Step 1 JS

const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

// Step 2 JS

const button = document.querySelector("#button");
const name = document.querySelector("#firstname");
// const pinkBackground = document.querySelector(".pink-bg"); Step 3 JS

// Step 4 JS
const elementsPink = document.querySelectorAll(
  ".pink-bg, .description pink-bg"
);
const textPink = document.querySelectorAll("h4");

button.addEventListener("click", () => {
  const newName = prompt("Enter your name");

  if (newName) {
    name.textContent = newName;
    name.style.color = "white";

    // Step 3 JS + Step 4

    const newColor = prompt("Enter a color");
    if (newColor) {
      //   pinkBackground.style.backgroundColor = newColor;  Step 3 JS

      elementsPink.forEach((element) => {
        element.style.backgroundColor = newColor;
      });
      textPink.forEach((h4) => {
        h4.style.color = newColor;
      });
    }
  }
});
