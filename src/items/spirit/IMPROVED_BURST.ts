import { ItemDescription } from "../Item";
import { MYSTIC_BURST } from "./MYSTIC_BURST";

export const IMPROVED_BURST: ItemDescription = {
  name: 'Improved Burst',
  id: 2121044373,
  type: 'spirit',
  tier: 3,
  stats: [
    [100, '', "Spirit Shield Health"],
    [8, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Abilities deal bonus Spirit Damage if they deal 200 damage or more in a single hit. Targets are immune to the effects of Improved Burst for 5s after taking damage from it.",
    details: [
      [9, "%", "Max Health Bonus Damage (Conditional)"]
    ]
  },
  preReq: () => MYSTIC_BURST
}
