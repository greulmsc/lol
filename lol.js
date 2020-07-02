let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById('user_score');
const pcScore_span = document.getElementById('pc_score');
const tablero_div = document.querySelector('.tablero');
const resultado_div = document.querySelector('.resultado');
const pi_div = document.getElementById('pi');
const pa_div = document.getElementById('pa');
const ti_div = document.getElementById('ti');


// set up the core function for the computer that will use math.random to loop through an array and return that value
function getpcChoice() {
  const choices = ['pi', 'pa', 'ti'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// similar to convertcase but just takes lowercase and replaces with titlecase
function convertCase(anythingIwant) {
  if (anythingIwant === 'pa') return 'Papel';
  if (anythingIwant === 'ti') return 'Tijeras';
  return 'Piedra';
}

// Winning Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function win(user, pc) {
  userScore++;
  // console.log('user score is ' + userScore + ' ' + user);
  userScore_span.innerHTML = userScore;
  const userName = ' (Tú)'.fontsize(3).sup();
  const compName = ' (PC)'.fontsize(3).sup();
  resultado_div.innerHTML = `<p>${convertCase(user)}${userName} le gana a ${convertCase(pc)}${compName}. Tú ganas! :D</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

// Losing Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function loses(user, pc) {
  pcScore++;
  // console.log('computer score is ' + computerScore + ' ' + computer);
  pcScore_span.innerHTML = pcScore;
  const userName = ' (Tú)'.fontsize(3).sup();
  const compName = ' (PC)'.fontsize(3).sup();
  resultado_div.innerHTML = `<p>${convertCase(pc)}${compName} le gana a ${convertCase(user)}${userName}. Pierdes! >:D</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('losingStyles');
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}

// Draw Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function draw(user, pc) {
	const userName = ' (Tú)'.fontsize(3).sup();
  const compName = ' (PC)'.fontsize(3).sup();
  resultado_div.innerHTML = `<p>Empate! Ambos eligieron ${convertCase(user)}</p>`;
  // "It was a draw! You both chose " + user + " " + computer; // old js
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('drawStyles');
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

// The core game functions that set up and determine the games actual logic aka paper beats rock etc
function game(userChoice) {
  const pcChoice = getpcChoice();
  // console.log('Game function: user choice is = ' + userChoice);
  // console.log('Game function: computer choice is = ' + computerChoice);

  switch (userChoice + pcChoice) {
    case 'papi':
    case 'piti':
    case 'tipa':
      win(userChoice, pcChoice);
      // console.log("user wins");
      break;
    case 'pipa':
    case 'tipi':
    case 'pati':
      loses(userChoice, pcChoice);
      // console.log("computer wins");
      break;
    case 'pipi':
    case 'titi':
    case 'papa':
      draw(userChoice, pcChoice);
      // console.log("draw");
      break;
  }
}
// ES5 style of writing this function
// function main() {
//   rock_div.addEventListener('click', function() {
//     game('rock');
//   });

//   paper_div.addEventListener('click', function() {
//     game('paper');
//   });

//   scissors_div.addEventListener('click', function() {
//     game('scissors');
//   });
// }

// ES6 style of writing this function
// This function creates and adds an eventlistener to the rock, paper scissors html element and the passes the value of that element to the game function
function main() {
  pi_div.addEventListener('click', () => game('pi'));
  pa_div.addEventListener('click', () => game('pa'));
  ti_div.addEventListener('click', () => game('ti'));
}

main();
