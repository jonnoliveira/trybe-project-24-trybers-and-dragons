import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static archetypesInstances = 0;
  private _Energy: EnergyType;

  constructor( // _n: name
    private _n: string,
  ) {
    super(_n);
    this._Energy = 'mana';
    Mage.archetypesInstances += 1;
  }
  
  get energyType(): EnergyType {
    return this._Energy;
  }

  public static createdArchetypeInstances() {
    return this.archetypesInstances;
  }
}