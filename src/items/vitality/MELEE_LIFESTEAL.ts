import { ItemDescription } from "../Item";
import { LIFESTRIKE } from "./LIFESTRIKE";

export const MELEE_LIFESTEAL: ItemDescription = {
  name: 'Melee Lifesteal',
  type: 'vitality',
  tier: 1,
  stats: [
    [13, '%', "Melee Damage"],
    [75, '', "Bonus Health"]
  ],
  passive: {
    description: "Your melee attacks heal you for 20% of the Melee Damage dealt plus 90. This heal is 40% effective vs non-heroes.",
    cooldown: 7
  },
  buildsInto: () => LIFESTRIKE
}
