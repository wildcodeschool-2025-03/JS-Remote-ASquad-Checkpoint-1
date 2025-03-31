
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

//part 1
// Changing avatar img on click:
const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
});


// part 2
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

//part 3
// modifing the button to add background color change
/*
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
*/

//part 4
// mogifing the button to change pink color elements on user choice
const nameBtn = document.getElementById("nameBtn");
nameBtn.addEventListener("click", () => {
    //root element
    const element = document.documentElement;

    //Get the current color variables value
    getComputedStyle(element).getPropertyValue("--wildColor");
    getComputedStyle(element).getPropertyValue("--lightWildColor");

    //adding first prompt for color choice
    const newColor = prompt("Enter your color:");

    //modifing the CSS color variables values
    document.documentElement.style.setProperty("--wildColor", newColor);
    document.documentElement.style.setProperty("--lightWildColor", newColor);
    
    

    //keeping the second prompt for name text  and color change
    const newName = prompt("Enter your name:");
    const name = document.getElementById("firstname");
    name.textContent = newName;
    name.style.color = "white";

});