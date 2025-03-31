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