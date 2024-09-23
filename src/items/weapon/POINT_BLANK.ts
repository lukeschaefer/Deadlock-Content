import { ItemDescription } from "../Item";
import { CLOSE_QUARTERS } from "./CLOSE_QUARTERS";

export const POINT_BLANK: ItemDescription = {
  name: 'Point Blank',
  type: 'weapon',
  tier: 3,
  stats: [
    [15, '%', "Bullet Resist"],
    [1, '', "Stamina"]
  ],
  passive: {
    description: "When in close range to your target, gain Weapon Damage and your bullets apply a Movement Slow.",
    details: [
      [45, "%", "Weapon Damage (Conditional)"],
      [25, "%", "Movement Slow (Conditional)"],
      [2, "s", "Slow Duration"],
      [15, "m", "Close Range"]
    ]
  },
  preReq: () => CLOSE_QUARTERS
}
