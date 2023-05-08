import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static archetypesInstances = 0;
  Energy: EnergyType;

  constructor( // _n: name, _s: special, _c: cost
    private _n: string,
    private _s: number = 0, 
    private _c: number = 0,
  ) {
    super(_n, _s, _c);
    this.Energy = 'mana';
  }
  
  get energyType(): EnergyType {
    return this.Energy;
  }

  public static createdArchetypeInstances() {
    this.archetypesInstances += 1;
    return this.archetypesInstances;
  }
}