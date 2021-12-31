// Auto vertical scroll

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);

// Menu Buger

const burgerContainer = document.querySelector('.burger-container');
const nav = document.querySelector('.menu');
const body = document.querySelector('body')

burgerContainer.addEventListener('click', () => {
    burgerContainer.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('active');
});