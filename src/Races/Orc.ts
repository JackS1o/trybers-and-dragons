import Race from './Race';

export default class Orc extends Race {
  private _maxLife: number;
  private static _racesInstance = 0;
  
  constructor(name: string, dexterity: number, maxLife = 74) {
    super(name, dexterity);
    this._maxLife = maxLife;
    Orc._racesInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Orc._racesInstance;
  }
} 