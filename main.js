// Query or ID Selectors
var classicGameChoice = document.getElementById('classicGameSelected');
var difficultGameChoice = document.getElementById('difficultGameSelected');
var rock = document.getElementById('rockFighter');
var paper = document.getElementById('paperFighter');
var scissors = document.getElementById('scissorsFighter');
var alien = document.getElementById('alienFighter');
var lizard = document.getElementById('lizardFighter');
var classicFightersDisplay = document.getElementById('classicFightersDisplay')
var fightersInfo = document.getElementById('fightersInfo')
var humanScore = document.getElementById('humanScore')
var computerScore = document.getElementById('computerScore')



var game = new Game();
// game.difficultGame()
// console.log(game.classicGame())
// console.log(game.computer.fighter)
// console.log(game.computer.wins)
// console.log(game.human.wins)

// Event Listeners go here:
window.addEventListener('load', scores)
classicGameChoice.addEventListener('click', startClassicGame);
difficultGameChoice.addEventListener('click', startDifficultGame);
classicFightersDisplay.addEventListener('click', startGame)

//Functions go here:

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
}

function startClassicGame() {
 show(classicFightersDisplay)
 hide(classicGameVersion)
 hide(difficultGameVersion)
 gameOrFighter.innerText = "Choose your fighter!"
}

function startDifficultGame() {
show(classicFightersDisplay)
show(difficultFightersDisplay)
hide(classicGameVersion)
hide(difficultGameVersion)
gameOrFighter.innerText = "Choose your fighter!"
}

function startGame(event) {
  game.assignHumanFighter(event.target.value)
  game.classicGame()
  fightersInfo.innerHTML = `
  <p>The Human fighter is ${game.human.fighter}</p>
  <p>The Computer fighter is ${game.computer.fighter}</p>
  <p>${game.whoWon}!</p>
  `
  humanScore.innerText = game.human.wins
  computerScore.innerText = game.computer.wins
  console.log(game.human.fighter)
  // console.log(game.classicGame())
  console.log(game.computer.fighter)
  // console.log(game.computer.wins)
  // console.log(game.human.wins)
  console.log(game.whoWon)
}




function scores() {

}




//Selectors needed
//user selects fighter
