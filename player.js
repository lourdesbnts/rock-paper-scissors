class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.icon;
    this.wins = 0;
    this.fighter = '';
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
  chooseDifficultWeapon() {
    var randomIndex = Math.floor(Math.random() * this.difficultFighters.length);
    this.fighter = this.difficultFighters[randomIndex]
    return this.fighter
    console.log(this.difficultFighters[randomIndex])
  }
}


// resetGame() {
  //should clear game just played
  //should show new icons for player to select new fighter
// }


//also says 'human wins'
//after win the game resets


//also says 'computer wins'
//after win the game resets
