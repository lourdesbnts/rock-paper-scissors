// Query or ID Selectors
var classicGameChoice = document.getElementById('classicGameVersion');
var difficultGameChoice = document.getElementById('difficultGameVersion');
var rock = document.getElementById('rockFighter');
var paper = document.getElementById('paperFighter');
var scissors = document.getElementById('scissorsFighter');
var alien = document.getElementById('alienFighter');
var lizard = document.getElementById('lizardFighter');



var game = new Game();
game.difficultGame()
console.log(game.difficultGame())
console.log(game.computer.fighter)
console.log(game.computer.wins)
console.log(game.human.wins)

// Event Listeners go here:
classicGameChoice.addEventListener('click', startClassicGame);
difficultGameChoice.addEventListener('click', startDifficultGame);

//Functions go here:

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
}

function startClassicGame() {

}

function startDifficultGame() {

}





//Selectors needed
//user clicks classic game
//user difficult game
//user selects fighter
