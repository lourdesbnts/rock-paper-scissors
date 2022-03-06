var human = new Player({
  name: 'Human',
  icon: 'here will be the token',
  fighter: ''
});

var computer = new Player({
  name: 'Computer',
  icon: 'here will be the token',
  fighter: ''
});


class Game {
  constructor() {
    this.whoWon = '';
  }

  classicGame(human, computer) {
    console.log(computer.chooseWeapon())
    if (human.fighter === computer.chooseWeapon()) {
      this.whoWon = 'It\'s a draw'
      return this.whoWon
    }
    if (human.fighter === 'paper' && computer.chooseWeapon() === 'rock') {
      this.whoWon = 'Human won!'
      human.scoreKeeper();
    // console.log(this.whoWon)
      return this.whoWon
    }
    if (human.fighter === 'rock' && computer.chooseWeapon() === 'scissors') {
      this.whoWon = 'Human won!'
      human.scoreKeeper();
    // console.log(this.whoWon)
      return this.whoWon
    }
    if (human.fighter === 'rock' && computer.chooseWeapon() === 'paper') {
      this.whoWon = 'Computer won!'
      computer.scoreKeeper();
      // console.log(this.whoWon)
      return this.whoWon
    }
    if (human.fighter === 'paper' && computer.chooseWeapon() === 'scissors') {
      this.whoWon = 'Computer won!'
      computer.scoreKeeper();
      // console.log(this.whoWon)
      return this.whoWon
    }
    if (human.fighter === 'scissor' && computer.chooseWeapon() === 'paper') {
      this.whoWon = 'Human won!'
      human.scoreKeeper();
      // console.log(this.whoWon)
      return this.whoWon
    }
    if (human.fighter === 'scissors' && computer.chooseWeapon() === 'rock') {
      this.whoWon = 'Computer won!'
      computer.scoreKeeper();
      // console.log(this.whoWon)
      return this.whoWon
    }
  }
}



// console.log(computer.chooseWeapon())
var game1 = new Game()
game1.classicGame(human, computer);



// make fighters dynamic for computer and the human

//computer chooses random weapon (method)
//how to create a method that chooses a random weapon for computer
// connecting the game class into the main.js file
