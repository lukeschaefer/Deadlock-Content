import { ItemDescription } from "../Item";
import { MELEE_LIFESTEAL } from "./MELEE_LIFESTEAL";

export const LIFESTRIKE: ItemDescription = {
  name: 'Lifestrike',
  type: 'vitality',
  tier: 3,
  stats: [
    [40, '%', "Melee Damage"],
    [125, '', "Bonus Health"],
    [8, '%', "Bullet Resist"]
  ],
  passive: {
    description: "Your Melee Attack applies Movement Slow and heals you for 55% of the Melee Damage dealt plus 110. This heal is 40% effective vs non-heroes.",
    cooldown: 5,
    details: [
      [60, "%", "Movement Slow (Conditional)"],
      [2.5, "s", "Slow Duration"]
    ]
  },
  preReq: () => MELEE_LIFESTEAL
}
