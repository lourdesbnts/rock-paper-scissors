// Query or ID Selectors
var classicGameChoice = document.getElementById('classicGameSelected');
var difficultGameChoice = document.getElementById('difficultGameSelected');
var rock = document.getElementById('rockFighter');
var paper = document.getElementById('paperFighter');
var scissors = document.getElementById('scissorsFighter');
var alien = document.getElementById('alienFighter');
var lizard = document.getElementById('lizardFighter');
var classicFightersDisplay = document.getElementById('classicFightersDisplay')



var game = new Game();
// game.difficultGame()
console.log(game.difficultGame())
console.log(game.computer.fighter)
console.log(game.computer.wins)
console.log(game.human.wins)

// Event Listeners go here:
window.addEventListener('load', scores)
classicGameChoice.addEventListener('click', startClassicGame);
difficultGameChoice.addEventListener('click', startDifficultGame);


//Functions go here:

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
}

//**FIX**
//when I click difficult game, nothing happens until i press classic, then all characters(figured it out gracias a Dios)
//for diifcult game appear

//I need the difficult button to be clicked and show the difficult characters(done!)



function startClassicGame() {
 show(classicFightersDisplay)
 hide(classicGameVersion)
 hide(difficultGameVersion)
 gameOrFighter.innerText = "Choose your fighter!"
}
//I think I need to add another id in html for the views to change


function startDifficultGame() {
show(classicFightersDisplay)
show(difficultFightersDisplay)
hide(classicGameVersion)
hide(difficultGameVersion)
gameOrFighter.innerText = "Choose your fighter!"
}






function scores() {

}




//Selectors needed
//user selects fighter
