// Query or ID Selectors
var classicGameChoice = document.getElementById('classicGameSelected');
var difficultGameChoice = document.getElementById('difficultGameSelected');
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var alien = document.getElementById('alien');
var lizard = document.getElementById('lizard');
var classicFightersDisplay = document.getElementById('classicFightersDisplay');
var difficultFightersDisplay = document.getElementById('difficultFightersDisplay');
var fightersInfo = document.getElementById('fightersInfo');
var humanScore = document.getElementById('humanScore');
var computerScore = document.getElementById('computerScore');
var computerFighter = document.querySelector('.computer-fighter');
var changeGameButton = document.querySelector('.change-game');




var game = new Game();
var gameType;

// Event Listeners

classicGameChoice.addEventListener('click', startClassicGame);
difficultGameChoice.addEventListener('click', startDifficultGame);
classicFightersDisplay.addEventListener('click', startDifficultChoice);
changeGameButton.addEventListener('click', showMenu);

//Functions

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function resetClassic() {
  fightersInfo.innerHTML = ''
  show(rock);
  show(paper);
  show(scissors);
  hide(computerFighter);
  gameOrFighter.innerText = "Choose your fighter!"
}

function resetDifficult() {
  fightersInfo.innerHTML = ''
  show(rock);
  show(paper);
  show(scissors);
  show(alien);
  show(lizard);
  hide(computerFighter)
  gameOrFighter.innerText = "Choose your fighter!"
}

function showMenu() {
  show(classicGameVersion);
  show(difficultGameVersion);
  hide(classicFightersDisplay);
  hide(changeGameButton);
  gameOrFighter.innerText = "Choose your game!"
}

function startClassicGame() {
  gameType = 'classic'
  show(classicFightersDisplay);
  hide(classicGameVersion);
  hide(difficultGameVersion);
  hide(alien);
  hide(lizard);
  show(changeGameButton);
  gameOrFighter.innerText = "Choose your fighter!"
}

function startDifficultGame() {
  gameType = 'difficult'
  show(classicFightersDisplay);
  hide(classicGameVersion);
  hide(difficultGameVersion);
  show(alien);
  show(lizard);
  show(changeGameButton);
  gameOrFighter.innerText = "Choose your fighter!"
}

function startClassicChoice(event) {
  game.assignHumanFighter(event.target.parentNode.id);
  game.classicGame();
  showSelectedCharacters(event.target.parentNode.id, 'classic');
  showComputerFighter();
  fightersInfo.innerHTML = `
  <p>Human choose:${game.human.fighter}</p>
  <p>Computer choose:${game.computer.fighter}</p>`
  gameOrFighter.innerText = game.whoWon
  humanScore.innerText = game.human.wins
  computerScore.innerText = game.computer.wins
  setTimeout(resetClassic, 2000);
}

function startDifficultChoice(event) {
  game.assignHumanFighter(event.target.parentNode.id)
  if (gameType === 'classic') {
    game.classicGame();
  }
    else {
    game.difficultGame();
  }
  showSelectedCharacters(event.target.parentNode.id, gameType)
  showComputerFighter();
  fightersInfo.innerHTML = `
  <p>Human choose: ${game.human.fighter}</p>
  <p>Computer choose: ${game.computer.fighter}</p>`
  gameOrFighter.innerText = game.whoWon
  humanScore.innerText = game.human.wins
  computerScore.innerText = game.computer.wins
    if (gameType === 'classic') {
      setTimeout(resetClassic, 4000);
  }
      else {
    setTimeout(resetDifficult, 4000);
  }
}

function showSelectedCharacters(playerSelection, gameType) {
  if(gameType === 'classic') {
    var icons = [rock, paper, scissors]
  }
  else {
    var icons = [rock, paper, scissors, lizard, alien]
  }
  for (var i = 0; i < icons.length; i++) {
    if (icons[i].id !== playerSelection) {
      hide(icons[i]);
    }
  }
}

function showComputerFighter() {
  show(computerFighter);
  computerFighter.src = `assets/happy-${game.computer.fighter}.png`
}
