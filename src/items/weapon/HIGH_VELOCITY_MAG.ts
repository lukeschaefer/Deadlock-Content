import { ItemDescription } from "../Item";
import { PRISTINE_EMBLEM } from "./PRISTINE_EMBLEM";

export const HIGH_VELOCITY_MAG: ItemDescription = {
  name: 'High-Velocity Mag',
  id: 3077079169,
  type: 'weapon',
  tier: 1,
  stats: [
    [20, '%', "Bullet Velocity"],
    [13, '%', "Weapon Damage"],
    [65, '', "Bullet Shield Health"]
  ],
  buildsInto: () => PRISTINE_EMBLEM
}
