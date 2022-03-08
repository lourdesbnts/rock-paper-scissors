class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.icon;
    this.wins = 0;
    this.classicFighters = ['rock', 'paper', 'scissors'];
    this.difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
    this.fighter = player.fighter;
  }

  scoreKeeper() {
    this.wins++
  }

  chooseWeapon() {
    var randomIndex = Math.floor(Math.random() * this.classicFighters.length);
    this.fighter = this.classicFighters[randomIndex];
    return this.fighter;
  }

  chooseDifficultWeapon() {
    var randomIndex = Math.floor(Math.random() * this.difficultFighters.length);
    this.fighter = this.difficultFighters[randomIndex];
    return this.fighter;
  }
}
