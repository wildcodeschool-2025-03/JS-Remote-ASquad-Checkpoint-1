function changeAvatar() {
  const NewAvatar = document.getElementById("avatar");
  NewAvatar.src = "./site/image/avatar.svg";
}

const userName = prompt();
if (userName) {
  const ancien = document.getElementById("firstname");
  ancien.innerHTML = ancien.innerHTML.replace("Matt", userName);
  ancien.style.color = "white";
}
