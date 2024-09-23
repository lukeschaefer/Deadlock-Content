import { ItemDescription } from "../Item";

export const WITHERING_WHIP: ItemDescription = {
  name: 'Withering Whip',
  type: 'spirit',
  tier: 2,
  stats: [
    [12, '', "Spirit Power"],
    [8, '%', "Fire Rate"],
    [50, '', "Bonus Health"]
  ],
  active: {
    description: "Target an enemy to apply Fire Rate Slow and reduce their Bullet Resist.",
    cooldown: 26,
    details: [
      ["-", 40, "%", "Fire Rate Slow"],
      ["-", 14, "%", "Bullet Resist"],
      [24, "m", "Cast Range"],
      [4.5, "s", "Duration"]
    ]
  }
}
