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
const background = document.querySelector(".pink-bg");

buttonChangeName.addEventListener('click', function() {
    background.style.backgroundColor = prompt("Enter a color: ");
    firstName.textContent = prompt("Enter your name: ");
    firstName.style.color = "white";
})