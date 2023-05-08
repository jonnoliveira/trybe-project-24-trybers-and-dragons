import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    private _name: string,
    private _special: number = 0, 
    private _cost: number = 0,
  ) {}

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}