import { ItemDescription } from "../Item";
import { HEADHUNTER } from "./HEADHUNTER";

export const HIGH_VELOCITY_MAG: ItemDescription = {
  name: 'High-Velocity Mag',
  type: 'weapon',
  tier: 1,
  stats: [
    [30, '%', "Bullet Speed"],
    [12, '%', "Weapon Damage"],
    [50, '', "Bullet Shield Health"]
  ],
  buildsInto: () => HEADHUNTER
}
