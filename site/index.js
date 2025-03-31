console.log("hello");


// changer l'avatar
const avatar = document.querySelector(".avatar img"); 

avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
    avatar.alt = "new avatar";
});

// changer le nom Matt et le click

document.addEventListener("DOMContentLoaded", () => {
   
    const changeBtn = document.getElementById("changeColorBtn");
    const firstname = document.getElementById("firstname");
    const backgroundNewColor = document.querySelector(".description.pink-bg");
    const h4Color = document.querySelectorAll(".pink-text");
    const footerColor = document.querySelector("footer.description.pink-bg");


// changer les couleurs côté utilisateur avec le bouton
    changeColorBtn.addEventListener("click", () => {
        const newBackground = prompt("Please enter a background color:");

        if (newBackground) {

// changer la couleur du background de description
            backgroundNewColor.style.backgroundColor = newBackground;

// changer la couleur du footer
            footerColor.style.backgroundColor = newBackground;

// changer la couleur des h4 
            h4Color.forEach(function (h4) {
                h4.style.color = newBackground;
            });

        } else {
            alert("Please enter a valid background color.");
        }


// changer le nom et sa couleur en blanc
        const newName = prompt("Enter a new name :");

        if (newName && newName !== "") {
            firstname.textContent = newName;
            firstname.style.color ="white";
            
        } else {
            alert("Please enter a valid name.");
        }
});    

// changer la couleur des liens html
    const lienNav = document.querySelectorAll(".menu a");

    lienNav.forEach(function(link) {
        link.style.color = "#750ff7";
    });
 


// modifier les Items list dans le li de Front-end
    const modifyListBtn = document.getElementById("modifyList");
    const listItems = document.querySelectorAll("#front-dev-tools li");

    const elementList = ["VSCode", "Github", "Terminal"];

    modifyListBtn.addEventListener("click", () => {
        for (let i = 0; i < listItems.length; i++) {
            if (elementList[i]) {
                listItems[i].textContent = elementList[i];
            }
        }
    });




// modifier les Items list dans le li de Front-end
    const formTolls = document.getElementById("formTolls");
    const tollsElement = document.getElementById("tollsElement");

    formTolls.addEventListener("submit", function (event) {
        event.preventDefault();

        const backElement = document.getElementById("backElement");
        const newBackElement = backElement.value;

        if (newBackElement) {
            // creer un nouvel li
            const liTools = document.createElement("li");
            liTools.innerHTML = newBackElement;

            // ajoute a la liste
            tollsElement.appendChild(liTools);

            // reinitialise 
            backElement.value = "";
        }     
    });


    
});


// ajouter un ou plusieurs element(s) dans le li de back-end
    const formTolls = document.getElementById("formTolls");
    const tollsElement = document.getElementById("tollsElement");

    formTolls.addEventListener("submit", function (event) {
        event.preventDefault();

        const backElement = document.getElementById("backElement");
        const newBackElement = backElement.value;

        if (newBackElement) {
            // creer un nouvel li
            const liTools = document.createElement("li");
            liTools.innerHTML = newBackElement;

            // ajoute a la liste
            tollsElement.appendChild(liTools);

            // reinitialise 
            backElement.value = "";
        }     
    });



