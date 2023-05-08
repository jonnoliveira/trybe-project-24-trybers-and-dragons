import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected playerOne: Character | Fighter,
    protected monsters: SimpleFighter[],
  ) {
    super(playerOne);
  }

  public fight(): number {
    this.monsters.forEach((monster) => {
      while (monster.lifePoints > 0) {
        this.playerOne.attack(monster);
        monster.attack(this.playerOne);
      }
    });
    return super.fight();
  }
}