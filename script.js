
const hole = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');
const start = document.querySelector('.start');
  let count = 0;

function wack() {

  count ++;
  score.innerHTML = count;
  console.log('wack');
}

moles.forEach(mole=>mole.addEventListener('click', wack));

localStorage.setItem('score', score);

function randomMoleUp() {
 let randomHole =  Math.floor(Math.random() * hole.length);
  hole[randomHole].classList.add('up');
  if(hole[randomHole].classList.contains('up')) {
    setTimeout(function() {
        hole[randomHole].classList.remove('up');
    }, 800)
    
    
     }
  
  setTimeout(randomMoleUp, 1000);
}

function startGame() {
    randomMoleUp();
}

start.addEventListener('click', startGame);