import Race from './Race';

export default class Elf extends Race {
  private _maxLife: number;
  private static _racesInstance = 0;
  
  constructor(name: string, dexterity: number, maxLife = 99) {
    super(name, dexterity);
    this._maxLife = maxLife;
    Elf._racesInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Elf._racesInstance;
  }
}