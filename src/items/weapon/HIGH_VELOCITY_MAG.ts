import { ItemDescription } from "../Item";
import { PRISTINE_EMBLEM } from "./PRISTINE_EMBLEM";

export const HIGH_VELOCITY_MAG: ItemDescription = {
  name: 'High-Velocity Mag',
  type: 'weapon',
  tier: 1,
  stats: [
    [25, '%', "Bullet Velocity"],
    [12, '%', "Weapon Damage"],
    [50, '', "Bullet Shield Health"]
  ],
  buildsInto: () => PRISTINE_EMBLEM
}
