const avatar = document.querySelector(".avatar-bis");


avatar.addEventListener("click", () => {
   const img = document.querySelector(".avatar-bis");
    img.src="/site/image/avatar.svg";
   
});

const buttonName = document.querySelector(".buttonname");
const name = document.querySelector("#firstname");
buttonName.addEventListener("click", () => {
    const newName = prompt("Enter your name");
    if (newName) {
      name.textContent = newName;
      name.style.color = "white";
    }});