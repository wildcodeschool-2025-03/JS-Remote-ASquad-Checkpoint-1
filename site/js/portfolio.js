const imgAvatar = document.querySelector('.img_avatar');

imgAvatar.addEventListener('click', function(){

    imgAvatar.src = "./image/avatar.svg"
})

const yourName = prompt("What's yout name ?");
const changingName = document.getElementById('firstname');

changingName.textContent = `${yourName}`;
changingName.style.color = "white";


const firstArticle = document.getElementById('first_article');
const changingColor = confirm("Would you like to change the color to purple ?");
if (changingColor == true) {
    firstArticle.style.backgroundColor = '#750ff7';

}
