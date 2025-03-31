
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
image.src = "image/avatar-bis.png";
image.alt = "avatar";
description.appendChild(image);


