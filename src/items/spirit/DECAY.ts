import { ItemDescription } from "../Item";

export const DECAY: ItemDescription = {
  name: 'Decay',
  id: 3144988365,
  type: 'spirit',
  tier: 2,
  stats: [
    [15, '', "Spirit Power"]
  ],
  active: {
    description: "Reduces healing received of targeted enemy and inflicts damage over time of their current health. Decay's damage is non-lethal.",
    cooldown: 45,
    details: [
      ["-", 50, "%", "Healing Reduction"],
      [3.1, "%/sec", "Bleed Damage"],
      [15, "m", "Cast Range"], // + (0.16 * Spirit Power)
      [10, "s", "Duration"]
    ]
  }
}
