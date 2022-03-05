class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.icon;
    this.wins = 0;
    this.fighter = "";
    this.classicFighters = ['rock', 'paper', 'scissors'];
    this.difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
  }
}
