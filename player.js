class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.icon;
    this.wins = 0;
    this.fighter = 'paper';
    this.classicFighters = ['rock', 'paper', 'scissors'];
    this.difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
  }

  scoreKeeper() {
    this.wins++
  }

  chooseWeapon() {
    var randomIndex = Math.floor(Math.random() * this.classicFighters.length);
    this.fighter = this.classicFighters[randomIndex]
    return this.fighter
    // console.log(this.classicFighters[randomIndex])
  }
}

// resetGame() {
  //should clear game just played
  //should show new icons for player to select new fighter
}

//method for player to chose a weapon
//method that adds 1 to the score
//also says 'human wins'
//after win the game resets

//method for computers to chose a weapon
//method that adds 1 to the score
//also says 'computer wins'
//after win the game resets
