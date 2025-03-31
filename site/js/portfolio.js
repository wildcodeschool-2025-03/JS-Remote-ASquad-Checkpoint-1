const imageAv = document.querySelector(".imageAv")

imageAv.addEventListener('click', function () {
    imageAv.src = "image/avatar-bis.png";
  });
  
  const changeNames = document.querySelector("#firstname");
  
  changeNames.addEventListener('click', function() {
    const userName = prompt("Please enter your name:");
  
    if (userName) {
      changeNames.textContent = userName; 
      changeNames.style.color = "white"; 
    }
  });


