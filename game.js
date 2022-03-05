class Game {
  constructor() {
    this.whoWon = '';
  }

  classicGame(player1, player2) {
    if (player1 === player2) {
      this.whoWon = 'It\'s a draw'
      return this.whoWon
    }
    if (player1 === 'paper' && player2 === 'rock') {
      console.log('player1 won')
    }
    if (player1 === 'rock' && player2 === 'scissors') {
      console.log('player1 won')
    }
    if (player1 === 'rock' && player2 === 'paper') {
      console.log('player2 wins')
    }
    if (player1 === 'paper' && player2 === 'rock') {
      console.log('player1 wins')
    }
    if (player1 === 'paper' && player2 === 'scissors') {
      console.log('player2 wins')
    }
    if (player1 === 'scissor' && player2 === 'paper') {
      console.log('player1 won')
    }
    if (player1 === 'scissors' && player2 === 'rock') {
      console.log('player2 wins')
    }
  }
}

var game1 = new Game()
game1.classicGame('paper', 'rock')

var human = new Player({
  name: 'Human',
  score: 0,
  fighter: 'paper'
});

var computer = new Computer({
  name: 'Computer',
  score: 0,
  fighter: 'rock'
});



//scissors beats paper
//scissors loses to Rock


//how do I make the game know that paper beats rock????
//paper > rock
//
