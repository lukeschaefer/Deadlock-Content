import { ItemDescription } from "../Item";

export const ENCHANTERS_BARRIER: ItemDescription = {
  name: "Enchanter's Barrier",
  type: 'vitality',
  tier: 2,
  stats: [
    [300, '', "Spirit Shield Health"]
  ],
  passive: {
    description: "While you have a Spirit Shield, gain bonus Spirit Power and Cooldown Reduction.",
    details: [
      [20, "Spirit Power While Shielded"],
      [8, "%", "Cooldown Reduction While Shielded"]
    ]
  }
}
