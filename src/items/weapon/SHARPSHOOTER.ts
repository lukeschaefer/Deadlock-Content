import { ItemDescription } from "../Item";
import { LONG_RANGE } from "./LONG_RANGE";

export const SHARPSHOOTER: ItemDescription = {
  name: 'Sharpshooter',
  id: 2152872419,
  type: 'weapon',
  tier: 3,
  stats: [
    [20, '%', "Ammo"],
    [15, '%', "Weapon Falloff Range"],
    [30, '%', "Weapon Zoom"],
    [175, '', "Bullet Shield"]
  ],
  passive: {
    description: "Deal additional Weapon Damage when beyond a minimum distance from your target.",
    details: [
      [70, "%", "Weapon Damage (15m Min. Distance)"]
    ]
  },
  preReq: () => LONG_RANGE
}
