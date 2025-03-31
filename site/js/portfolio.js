const firstBanner = document.querySelector('.first-banner');
const avatar = firstBanner.querySelector('img');

const avatar1 = 'image/avatar-bis.png';
const avatar2 = 'image/avatar.svg';

avatar.addEventListener('click', () => {
  if (avatar.src.endsWith(avatar1)) {
    avatar.src = avatar2;
  } else {
    avatar.src = avatar1;
  }
});

const descriptionSection = document.querySelector('.description');
const modifyButton = document.createElement('button');
modifyButton.textContent = 'Modify text and color';
modifyButton.style.backgroundColor = '#ec9797'; 
modifyButton.style.color = 'white';
modifyButton.style.padding = '10px 20px';

descriptionSection.appendChild(modifyButton);


modifyButton.addEventListener('click', () => {
    const OtherColor = prompt('Enter a color:');
  
    if (OtherColor) {
      const newName = prompt('Enter your name:');
  
      if (newName) {
        const firstNameSpan = document.getElementById('firstname');
        firstNameSpan.textContent = newName;
        firstNameSpan.style.color = 'white';
  
        const descriptionSections = document.querySelectorAll('.description.pink-bg');
        descriptionSections.forEach(section => {
            section.style.backgroundColor = OtherColor;
        });
          
        const pinkTexts = document.querySelectorAll('.pink-text');
        pinkTexts.forEach(text => {
          text.style.color = OtherColor;
        });
      }
    }
  });