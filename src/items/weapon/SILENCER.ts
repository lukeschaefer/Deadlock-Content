import { ItemDescription } from "../Item";
import { SLOWING_BULLETS } from "./SLOWING_BULLETS";

export const SILENCER: ItemDescription = {
  name: 'Silencer',
  type: 'weapon',
  tier: 4,
  stats: [
    [25, '%', "Bullet Slow Proc"],
    [15, '%', "Weapon Damage"],
    [12, 'Spirit'],
  ],
  active: {
    description: "For the next 4s, all your bullets immediately apply Silence. Silence prevents targets from using abilities.",
    cooldown: 34,
    details: [
      [2, "s", "Silence Status Duration"]
    ]
  },
  preReq: () => SLOWING_BULLETS
}
