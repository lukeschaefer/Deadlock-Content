import { ItemDescription } from "../Item";
import { SHARPSHOOTER } from "./SHARPSHOOTER";

export const LONG_RANGE: ItemDescription = {
  name: 'Long Range',
  id: 3331811235,
  type: 'weapon',
  tier: 2,
  stats: [
    [20, '%', "Ammo"],
    [90, '', "Bullet Shield Health"]
  ],
  passive: {
    description: "Deal additional Weapon Damage when beyond a minimum distance from your target.",
    details: [
      [40, "%", "Weapon Damage (Conditional)"],
      [15, "m", "Minimum Distance"]
    ]
  },
  buildsInto: () => SHARPSHOOTER
}
