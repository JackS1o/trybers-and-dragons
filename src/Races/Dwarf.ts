import Race from './Race';

export default class Dwarf extends Race {
  private _maxLife: number;
  private static _racesInstance = 0;
  
  constructor(name: string, dexterity: number, maxLife = 80) {
    super(name, dexterity);
    this._maxLife = maxLife;
    Dwarf._racesInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Dwarf._racesInstance;
  }
}