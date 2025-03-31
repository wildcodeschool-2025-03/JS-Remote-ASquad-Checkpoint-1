const avatar = document.querySelector(".avatar");

avatar.onclick = function () {
    if (avatar.src == "http://127.0.0.1:5500/JS-Remote-ASquad-Checkpoint-1/site/image/avatar-bis.png") {
        avatar.src = "image/avatar.svg";
    } else {
        avatar.src = "image/avatar-bis.png";
    }
}

const buttonChangeName = document.querySelector("button");
const firstName = document.getElementById("firstname");
const backgrounds = document.querySelectorAll(".pink-bg");
const pinkTexts = document.querySelectorAll(".pink-text");

buttonChangeName.addEventListener('click', function() {
    const newColor = prompt("Enter a color: "); 

    for (const background of backgrounds) {
        background.style.backgroundColor = newColor;
    }
    
    for (const pinkText of pinkTexts) {
        pinkText.style.color = newColor;
    }
    firstName.textContent = prompt("Enter your name: ");
    firstName.style.color = "white";
});  