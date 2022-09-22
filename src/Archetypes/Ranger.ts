import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _archetypeInstance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._archetypeInstance += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archetypeInstance;
  }
}