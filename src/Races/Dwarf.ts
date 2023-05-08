import Race from './Race';

export default class Dwarf extends Race {
  private static racesInstances = 0;
  HP: number;

  constructor(private _n: string, private _d: number) { // n: name - d: dexterity
    super(_n, _d);
    this.HP = 80;
  }

  public static createdRacesInstances() {
    this.racesInstances += 1;
    return this.racesInstances;
  }

  get maxLifePoints(): number {
    return this.HP;
  }
}