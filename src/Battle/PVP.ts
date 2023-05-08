import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    protected playerOne: Character | Fighter,
    protected playerTwo: Character | Fighter,
  ) {
    super(playerOne);
  }

  public fight(): number {
    while (this.playerTwo.lifePoints > 0) {
      this.playerOne.attack(this.playerTwo);
      this.playerTwo.attack(this.playerOne);
    }

    return super.fight();
  }
}