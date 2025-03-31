const avatarImg = document.querySelector(".avatar");
const avatarImg2 = document.querySelector(".avatar2");
const pinkBg = document.querySelector(".description pink-bg");
const btn = document.querySelector(".btn");
let firstname = document.querySelector("#firstname");

avatarImg.addEventListener("click", () => {
    avatarImg.style.display = "none";
    avatarImg2.style.display = "block";

})

btn.addEventListener("click", () => {
    let userName = prompt("What's your name");
    firstname.style.color = "white";
    firstname.innerHTML = `${userName}`;

})