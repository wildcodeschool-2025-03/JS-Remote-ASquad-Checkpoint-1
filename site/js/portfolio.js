const avatarImg = document.querySelector(".avatar");
const avatarImg2 = document.querySelector(".avatar2");
const pinkBg = document.querySelector(".pink-bg");
const btn = document.querySelector(".btn");
let firstname = document.querySelector("#firstname");

avatarImg.addEventListener("click", () => {
    avatarImg.style.display = "none";
    avatarImg2.style.display = "block";

})

btn.addEventListener("click", () => {
    let color = prompt("Enter a color");
    pinkBg.style.backgroundColor = `${color}`;
    console.log(color);

    let userName = prompt("Enter your name");
    firstname.style.color = "white";
    firstname.innerHTML = `${userName}`;

})

