import { ItemDescription } from "../Item";

export const HEALING_BOOSTER: ItemDescription = {
  name: 'Healing Booster',
  type: 'vitality',
  tier: 2,
  stats: [
    [6, '%', "Spirit Resist"],
    [2, '', "Health Regen"]
  ],
  passive: {
    description: "Increases the effectiveness of your Healing and increases your resistance to healing reduction.",
    details: [
      ["+", 25, "%", "Healing Effectiveness"],
      ["+", 15, "%", "Heal Reduction Resistance"]
    ]
  }
}
