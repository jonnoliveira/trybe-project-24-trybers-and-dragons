import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(
    private _lifePoints: number = 85,
    private _strength: number = 63,
  ) {}

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const remainingHP = this._lifePoints - attackPoints;
    
    if (remainingHP <= 0) {
      this._lifePoints = -1;
    }

    this._lifePoints = remainingHP;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }
}