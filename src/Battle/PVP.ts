import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _enemy: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    super.fight();
    this._enemy = enemy;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._enemy.lifePoints > 0) {
      this.player.attack(this._enemy);
      this._enemy.attack(this.player);
    }
    return this.player.lifePoints > this._enemy.lifePoints ? 1 : -1;
  }
}
