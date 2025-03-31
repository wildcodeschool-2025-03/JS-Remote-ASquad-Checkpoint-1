const avatar = document.querySelector(".idImage");

avatar.addEventListener("click", function () {
avatar.src="image/avatar.svg";
})

const textChangeBtn = document.querySelector(".textChangeBtn");
const firstName = document.getElementById("firstname");
const backgroundColor = document.querySelector(".pink-bg");
const text = document.querySelectorAll(".pink-text");
const other = document.querySelectorAll(".pink-bg");

textChangeBtn.addEventListener ("click", function (changeColor) {
const colorInput = prompt("Enter a color: ");

  if (colorInput === "#750FF7") {
    textChangeBtn.style.background = "#750FF7";
    backgroundColor.style.background = "#750FF7";

    text.forEach(function(element) {
    element.style.color = "#750FF7";
});
    other.forEach(function(element) {
    element.style.background = "#750FF7";
});
  } 
});

textChangeBtn.addEventListener ("click", function (changeText) {
    const nameInput = prompt("Enter your name: ");

    firstName.textContent = nameInput;
    firstName.style.color = "white";
        
    });

