let randomLucky = Math.round(Math.random() * 10);

const mensagensDaSorte = [
  'Que a sorte esteja sempre ao seu lado.',
  'Que cada dia traga uma nova razão para sorrir.',
  'Que a sorte te encontre onde quer que você vá.',
  'Que os ventos da sorte soprem a seu favor.',
  'Que você encontre a sorte nas pequenas coisas da vida.',
  'Que a sorte e o amor estejam sempre presentes em sua jornada.',
  'Que a sorte te abrace como um amigo fiel.',
  'Que a vida te surpreenda com momentos de felicidade.',
  'Que a sorte te guie no caminho da realização de seus sonhos.',
  'Que cada passo que você der seja abençoado pela sorte.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
];

const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const openCookie = document.querySelector('#open-cookie');
const closeCookie = document.querySelector('#close-cookie');
const getMessage = document.querySelector('.box-lucky p');

openCookie.addEventListener('mouseenter', () => {
  const timeOut = setTimeout(() => {
    getMessage.innerText = mensagensDaSorte[randomLucky];
    toggleScreen();
  }, 1000);

  if (screen1.classList.contains('hide')) {
    clearTimeout(timeOut);
  }
});

closeCookie.addEventListener('click', (event) => {
  event.preventDefault();
  handleTryAgain();
});

function handleTryAgain() {
  toggleScreen();
  randomLucky = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
