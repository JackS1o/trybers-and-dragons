import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[] | Fighter[];

  constructor(player: Fighter, monsters: SimpleFighter[] | Fighter[]) {
    super(player);
    super.fight();
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
    });
    return this.player.lifePoints > 0 ? 1 : -1;
  }
}
