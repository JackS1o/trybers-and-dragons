import Race from './Race';

export default class Halfling extends Race {
  private _maxLife: number;
  private static _racesInstance = 0;
  
  constructor(name: string, dexterity: number, maxLife = 60) {
    super(name, dexterity);
    this._maxLife = maxLife;
    Halfling._racesInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Halfling._racesInstance;
  }
} 