import { ItemDescription } from "../Item";

export const HEALBANE: ItemDescription = {
  name: 'Healbane',
  id: 2603935618,
  type: 'vitality',
  tier: 2,
  stats: [
    [75, '', "Bonus Health"]
  ],
  passive: {
    description: "Your Spirit Damage applies Healing Reduction. If an enemy hero dies under this effect, you receive a large heal.",
    details: [
      ["+", 40, "%", "Healing Reduction (Conditional)"],
      [350, "Heal on Hero Kill"],
      [6, "s", "Duration"]
    ]
  }
}
