import { ItemDescription } from "../Item";

export const SPIRITUAL_OVERFLOW: ItemDescription = {
  name: 'Spiritual Overflow',
  id: 2226497419,
  type: 'weapon',
  tier: 4,
  stats: [
    [20, '%', "Fire Rate"],
    [15, '%', "Cooldown Reduction"],
    [10, '%', "Spirit Lifesteal"],
    [250, '', "Bullet Shield"]
  ],
  passive: {
    description: "Gain bonus Spirit Power by charging up with your bullets on enemy heroes.",
    details: [
      [45, "Spirit Power (Conditional)"],
      [0.8, "%", "Buildup Per Shot"],
      [18, "s", "Duration"]
    ]
  }
}
