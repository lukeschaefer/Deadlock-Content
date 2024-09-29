import { ItemDescription } from "../Item";

export const WITHERING_WHIP: ItemDescription = {
  name: 'Withering Whip',
  type: 'spirit',
  tier: 2,
  stats: [
    [6, '', "Spirit Power"],
    [50, '', "Bonus Health"],
    [1, 'Sprint']
  ],
  active: {
    description: "Target an enemy to apply Fire Rate Slow and reduce their Bullet Resist.",
    cooldown: 26,
    details: [
      ["-", 45, "%", "Fire Rate Slow"],
      ["-", 14, "%", "Bullet Resist"],
      [30, "m", "Cast Range"],
      [4.5, "s", "Duration"]
    ]
  }
}
