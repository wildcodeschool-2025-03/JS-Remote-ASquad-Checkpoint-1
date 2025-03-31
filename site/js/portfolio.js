const avatarImage = document.querySelector(".img-avatar");
const newimage = document.createElement("img");

newimage.src = "image/avatar.src";
newImage.alt = "Nouveau avatar";

avatarImage.addEventListener("click", function () {
    if (newImage.src.includes("avatar.svg")) {
      newImage.src = "image/avatar.svg";
    } else {
      avatarImage.src = "image/avatar-bis.svg";
    }
  });

  const container = document.getElementById("image-container");
  if (container) {
    container.appendChild(newImage);
  }