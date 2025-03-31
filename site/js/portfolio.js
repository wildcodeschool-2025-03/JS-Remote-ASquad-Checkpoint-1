/* changer l'image de l'avatar quand je clique dessus */

const avatar = document.querySelector(".avatarJs")
avatar.addEventListener("click",() => {
avatar.src="image/avatar.svg";
});

/* step 2  */

const button = document.querySelector(".buttonJS")
const username =document.getElementById("firstname")
const color = document.querySelector(".description.pink-bg")

button.addEventListener("click",() => {
    const myName = prompt("Votre prénom ?");
    const myColor = prompt("Votre couleur ?")
    if (myName) {
        username.textContent = myName;
        username.style.color = "white";
    }

    if(myColor) {
        color.style.backgroundColor = myColor
    }
    

});