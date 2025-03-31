const avatar = document.querySelector(".avatar");

avatar.onclick = function () {
    if (avatar.src == "http://127.0.0.1:5500/JS-Remote-ASquad-Checkpoint-1/site/image/avatar-bis.png") {
        avatar.src = "image/avatar.svg";
    } else {
        avatar.src = "image/avatar-bis.png";
    }
}

const buttonChangeName = document.querySelector(".first-button");


buttonChangeName.addEventListener('click', function() {
    const firstName = document.getElementById("firstname");
    const backgrounds = document.querySelectorAll(".pink-bg");
    const pinkTexts = document.querySelectorAll(".pink-text");

    const newColor = prompt("Enter a color: "); 

    for (const background of backgrounds) {
        background.style.backgroundColor = newColor;
    }

    for (const pinkText of pinkTexts) {
        pinkText.style.color = newColor;
    }
    firstName.textContent = prompt("Enter your name: ");
    firstName.style.color = "white";

    const links = document.querySelectorAll("a");
    for (const link of links) {
        link.style.color = newColor;
    }
});  

const changeList = document.querySelector(".dev-tools-button")
changeList.addEventListener('click', function() {
    const li1 = document.getElementById("front-dev-tools1");
    const li2 = document.getElementById("front-dev-tools2");
    const li3 = document.getElementById("front-dev-tools3");

    li1.textContent = "VSCode";
    li2.textContent = "GitHub";
    li3.textContent = "Terminal";
});

const addTool = document.querySelector(".add-button");
addTool.addEventListener('click', function() {
    const newTool = document.querySelector("input").value.trim();
    if (newTool.length === 0) {
        alert("Please enter a dev tool");
        return
    }

    const newListItem = document.createElement('li');
    newListItem.textContent = newTool;
    const addingList = document.querySelector(".new-tool");
    addingList.appendChild(newListItem);
});

