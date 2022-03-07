class Game {
  constructor() {
    this.human = new Player({
      name: 'Human',
      icon: 'here will be the token',
      fighter: 'paper'
    })
    this.computer = new Player({
      name: 'Computer',
      icon: 'here will be the token',
      fighter: null
    })
    this.whoWon = '';
    this.computerChoiceClassic = this.computer.chooseWeapon();
    this.computerChoiceDifficult = this.computer.chooseDifficultWeapon();
  }


  classicGame() {
    console.log(this.human.fighter)
    if (this.human.fighter === this.computerChoiceClassic) {
      this.whoWon = 'It\'s a draw'
      return this.whoWon;
    }
    if (this.human.fighter === 'paper' && this.computerChoiceClassic === 'rock') {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'rock' && this.computerChoiceClassic === 'scissors') {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'rock' && this.computerChoiceClassic === 'paper') {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'paper' && this.computerChoiceClassic === 'scissors') {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper();
      console.log(this.whoWon)
      return this.whoWon;
    }
    if (this.human.fighter === 'scissor' && this.computerChoiceClassic === 'paper') {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'scissors' && this.computerChoiceClassic === 'rock') {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper();
      return this.whoWon;
    }
  }

  difficultGame() {
    console.log(this.human.fighter)
    if (this.human.fighter === this.computerChoiceDifficult) {
      this.whoWon = 'It\'s a Draw!'
      return this.whoWon;
    }
    if (this.human.fighter === 'rock' && (this.computerChoiceDifficult === 'scissors'|| this.computerChoiceDifficult === 'lizard')) {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'rock' && (this.computerChoiceDifficult === 'alien'|| this.computerChoiceDifficult === 'paper')) {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'paper' && (this.computerChoiceDifficult === 'scissors' || this.computerChoiceDifficult === 'lizard')) {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper()
      return this.whoWon;
    }
    if (this.human.fighter === 'paper' && (this.computerChoiceDifficult === 'alien' || this.computerChoiceDifficult === 'rock')) {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'scissors' && (this.computerChoiceDifficult === 'alien' || this.computerChoiceDifficult === 'rock')) {
      this.whoWon = `${computer.name} won!`
      this.computer.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'scissors' && (this.computerChoiceDifficult === 'paper' || this.computerChoiceDifficult === 'lizard')) {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'alien' && (this.computerChoiceDifficult === 'scissors' || this.computerChoiceDifficult === 'rock')) {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'alien' && (this.computerChoiceDifficult === 'paper' || this.computerChoiceDifficult === 'lizard')) {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'lizard' && (this.computerChoiceDifficult === 'paper' || this.computerChoiceDifficult === 'rock')) {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'lizard' && (this.computerChoiceDifficult === 'scissors' || this.computerChoiceDifficult === 'alien')) {
    this.whoWon = `${this.computer.name} won!`
    this.computer.scoreKeeper();
    return this.whoWon;
    }
  }
}
