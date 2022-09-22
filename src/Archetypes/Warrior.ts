import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _archetypeInstance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._archetypeInstance += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstance;
  }
}