import { ItemDescription } from "../Item";
import { IMPROVED_BURST } from "./IMPROVED_BURST";

export const MYSTIC_BURST: ItemDescription = {
  name: 'Mystic Burst',
  type: 'spirit',
  tier: 1,
  stats: [
    [40, '', "Spirit Shield Health"],
    [6, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Abilities deal bonus Spirit Damage if they deal 80 damage or more in a single hit.",
    cooldown: 6,
    details: [
      [35, "Bonus Damage"]
    ]
  },
  buildsInto: () => IMPROVED_BURST
}
