
// Adding title to section description
const description = document.querySelector(".description");
const title = document.createElement("h2");
title.textContent = "Full Stack Developper";
description.appendChild(title);

//Adding description to section description
const paragraph = document.createElement('p');  
paragraph.textContent = "I code beautifully simple things, and I love what I do.";
description.appendChild(paragraph);

//Adding image to section description:
const image = document.createElement('img');
image.id = ("avatar");
image.src = "image/avatar-bis.png";
image.alt = "avatar";
description.appendChild(image);



/* ---------------------------- JS part  ---------------------------- */

// Changing avata img on click:
const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
});

// adding a button to change name
const content = document.querySelector(".presentation section");
const button = document.createElement("button");
button.id = ("nameBtn");
button.textContent = "Modify text and color";
content.appendChild(button);

// adding a prompt to change name
/*
const nameBtn = document.getElementById("nameBtn");
nameBtn.addEventListener("click", () => {
    const newName = prompt("Enter your name:");
    const name = document.getElementById("firstname");
    name.textContent = newName;
    name.style.color = "white";
});
*/

// modifing the button to add background color change
const nameBtn = document.getElementById("nameBtn");
nameBtn.addEventListener("click", () => {
    //adding first prompt for color choice
    const color = document.querySelector("section.description.pink-bg");
    const newColor = prompt("Enter your color:");
    color.style.backgroundColor = newColor;
    nameBtn.style.backgroundColor = newColor;

    //adding second prompt for name text  and color change
    const newName = prompt("Enter your name:");
    const name = document.getElementById("firstname");
    name.textContent = newName;
    name.style.color = "white";

});