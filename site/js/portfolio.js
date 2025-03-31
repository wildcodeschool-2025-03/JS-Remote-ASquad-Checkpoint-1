const avatar = document.querySelector(".avatar-bis");


avatar.addEventListener("click", () => {
   const img = document.querySelector(".avatar-bis");
    img.src="/site/image/avatar.svg";
   
});

const buttonName = document.querySelector(".buttonname");
const name = document.querySelector("#firstname");
const variableColor = document.documentElement;

/*step 4 */

getComputedStyle(variableColor).getPropertyValue("--wildColor");
getComputedStyle(variableColor).getPropertyValue("--lightWildColor");

buttonName.addEventListener("click", () => {
    const newName = prompt("Enter your name");
    if (newName) {
      name.textContent = newName;
      name.style.color = "white";
      const newColor = prompt("Enter a color");
      if (newColor) {
        document.documentElement.style.setProperty("--wildColor", newColor);
    document.documentElement.style.setProperty("--lightWildColor", newColor);
      }
    }});
    