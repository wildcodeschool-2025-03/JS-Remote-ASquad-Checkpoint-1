const avatar = document.querySelector(".avatar");
console.log(avatar.src);

/* avatar.onclick = function () {
    if (avatar.src == "image/avatar.svg") {
        avatar.src = "image/avatar-bis.png";
    } else {
        avatar.src = "image/avatar.svg";
    }
}
*/

avatar.onclick = function () {
    avatar.src = "image/avatar.svg";
}