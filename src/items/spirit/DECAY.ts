import { ItemDescription } from "../Item";

export const DECAY: ItemDescription = {
  name: 'Decay',
  type: 'spirit',
  tier: 2,
  stats: [
    [15, '', "Spirit Power"]
  ],
  active: {
    description: "Reduces healing received of targeted enemy and inflicts damage over time of their current health. Decay's damage is non-lethal.",
    cooldown: 30,
    details: [
      ["-", 50, "%", "Healing Reduction"],
      [3.1, "%/sec", "Bleed Damage"],
      [15, "m", "Cast Range"], // + (0.20 * Spirit Power)
      [10, "s", "Duration"]
    ]
  }
}
