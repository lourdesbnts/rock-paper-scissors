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
    // console.log(computer.chooseWeapon())
    if (human.fighter === computer.chooseWeapon()) {
      this.whoWon = 'It\'s a draw'
      return this.whoWon;
    }
    if (human.fighter === 'paper' && computer.chooseWeapon() === 'rock') {
      this.whoWon = 'Human won!'
      human.scoreKeeper();
    // console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'rock' && computer.chooseWeapon() === 'scissors') {
      this.whoWon = 'Human won!'
      human.scoreKeeper();
    // console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'rock' && computer.chooseWeapon() === 'paper') {
      this.whoWon = 'Computer won!'
      computer.scoreKeeper();
      // console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'paper' && computer.chooseWeapon() === 'scissors') {
      this.whoWon = 'Computer won!'
      computer.scoreKeeper();
      // console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'scissor' && computer.chooseWeapon() === 'paper') {
      this.whoWon = 'Human won!'
      human.scoreKeeper();
      // console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'scissors' && computer.chooseWeapon() === 'rock') {
      this.whoWon = 'Computer won!'
      computer.scoreKeeper();
      // console.log(this.whoWon)
      return this.whoWon;
    }
  }

  difficultGame() {
    if (human.weapon === computer.weapon) {
      this.whoWon = 'It\'s a Draw!'
      return this.whoWon;
    }
    if (human.fighter === 'rock' && chooseDifficultWeapon() === 'scissors'|| chooseDifficultWeapon() === 'lizard') {
      this.whoWon = `${human.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'rock' && chooseDifficultWeapon() === 'alien'|| chooseDifficultWeapon() === 'paper') {
      this.whoWon = `${computer.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'paper' && chooseDifficultWeapon() === 'scissors' || chooseDifficultWeapon() === 'lizard') {
      this.whoWon = `${computer.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'paper' && chooseDifficultWeapon() === 'alien' || chooseDifficultWeapon() === 'rock') {
      this.whoWon = `${human.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'scissors' && chooseDifficultWeapon() === 'alien' || chooseDifficultWeapon() === 'rock') {
      this.whoWon = `${computer.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'scissors' && chooseDifficultWeapon() === 'paper' || chooseDifficultWeapon() === 'lizard') {
      this.whoWon = `${human.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'alien' && chooseDifficultWeapon() === 'scissors' || chooseDifficultWeapon() === 'rock') {
      this.whoWon = `${human.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'alien' && chooseDifficultWeapon() === 'paper' || chooseDifficultWeapon() === 'lizard') {
      this.whoWon = `${computer.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'lizard' && chooseDifficultWeapon() === 'paper' || chooseDifficultWeapon() === 'rock') {
      this.whoWon = `${human.name} won!`
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (human.fighter === 'lizard' && chooseDifficultWeapon() === 'scissors' || chooseDifficultWeapon() === 'alien')
    this.whoWon = `${computer.name} won!`
    console.log(this.whoWon)
    return this.whoWon;
  }
}




var game1 = new Game()
game1.classicGame(human, computer);

var game2 = new Game()
game2.difficultGame(human, computer);







console.log(computer.chooseDifficultWeapon())


// console.log(computer.chooseWeapon())

// make fighters dynamic for computer and the human

//computer chooses random weapon (method)
//how to create a method that chooses a random weapon for computer
// connecting the game class into the main.js file
