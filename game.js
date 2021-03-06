class Game {
  constructor() {
    this.human = new Player({
      name: 'Human',
      fighter: ''
    });
    this.computer = new Player({
      name: 'Computer',
      fighter: ''
    });
    this.whoWon = '';
    this.computerChoiceClassic = this.computer.chooseWeapon();
    this.computerChoiceDifficult = this.computer.chooseDifficultWeapon();
  }

    assignHumanFighter(fighter) {
      this.human.fighter = fighter
    }

  classicGame() {
    this.computer.fighter = this.computer.chooseWeapon();
    if (this.human.fighter === this.computer.fighter) {
      this.whoWon = 'It\'s a draw!'
      return this.whoWon;
    }
    if (this.human.fighter === 'paper' && this.computer.fighter === 'rock') {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'rock' && this.computer.fighter === 'scissors') {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'rock' && this.computer.fighter === 'paper') {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'paper' && this.computer.fighter === 'scissors') {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'scissor' && this.computer.fighter === 'paper') {
      this.whoWon = `${this.human.name} won!`
      this.human.scoreKeeper();
      return this.whoWon;
    }
    if (this.human.fighter === 'scissors' && this.computer.fighter === 'rock') {
      this.whoWon = `${this.computer.name} won!`
      this.computer.scoreKeeper();
      return this.whoWon;
    }
  }

  difficultGame() {
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
      this.computer.scoreKeeper();
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
