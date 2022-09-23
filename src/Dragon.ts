import { SimpleFighter } from './Fighter';
import Monster from './Monster';
import getRandomInt from './utils';

export default class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 63;
    this._defense = getRandomInt(1, 10);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}