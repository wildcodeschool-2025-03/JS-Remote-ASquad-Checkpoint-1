const avatarImg = document.querySelector(".avatar");
const avatarImg2 = document.querySelector(".avatar2");
const pinkBg = document.querySelector(".pink-bg");
const pinkBgAll = document.querySelectorAll(".pink-bg");
const btn = document.querySelector(".btn");
let firstname = document.querySelector("#firstname");
let pinkText = document.querySelector(".pink-text");
let pinkTextAll = document.querySelectorAll(".pink-text");

avatarImg.addEventListener("click", () => {
    avatarImg.style.display = "none";
    avatarImg2.style.display = "block";

})

btn.addEventListener("click", () => {
    let color = prompt("Enter a color");
    pinkBgAll.forEach((pink) => pink.style.backgroundColor = `${color}`);
    pinkTextAll.forEach((txt) => txt.style.color = `${color}`);
   
    let userName = prompt("Enter your name");
    firstname.style.color = "white";
    firstname.innerHTML = `${userName}`;

})

