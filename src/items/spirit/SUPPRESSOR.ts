import { ItemDescription } from "../Item";
import { MYSTIC_SLOW } from "./MYSTIC_SLOW";

export const SUPPRESSOR: ItemDescription = {
  name: 'Suppressor',
  type: 'spirit',
  tier: 2,
  stats: [
    [12, '', "Spirit Power"],
    [50, '', "Bonus Health"],
    [2.5, '', "Health Regen"]
  ],
  passive: {
    description: "When you deal Spirit Damage to enemies, you also apply Fire Rate Slow.",
    details: [
      ["-", 25, "%", "Fire Rate Slow"],
      [2, "s", "Duration"]
    ]
  },
  buildsInto: () => MYSTIC_SLOW
}
