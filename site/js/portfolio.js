// Step 1 JS

const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

// Step 2 JS

const button = document.querySelector("#button");
const name = document.querySelector("#firstname");

button.addEventListener("click", () => {
  const newName = prompt("Enter your name");

  if (newName) {
    name.textContent = newName;
    name.style.color = "white";
  }
});
