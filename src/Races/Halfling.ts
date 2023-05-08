import Race from './Race';

export default class Halfling extends Race {
  private static racesInstances = 0;
  HP: number;

  constructor(private n: string, private d: number) { // n: name - d: dexterity
    super(n, d);
    this.HP = 60;
  }

  public static createdRacesInstances() {
    this.racesInstances += 1;
    return this.racesInstances;
  }

  get maxLifePoints(): number {
    return this.HP;
  }
}