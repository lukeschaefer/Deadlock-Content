import { ItemDescription } from "../Item";

export const SIPHON_BULLETS: ItemDescription = {
  name: 'Siphon Bullets',
  type: 'vitality',
  tier: 4,
  stats: [
    [18, '%', "Bullet Resistance"],
  ],
  passive: {
    description: "Your bullets temporarily steal Max HP from enemies. Enemies regain their stolen health when the debuff expires. Permanently steal one stack of health if a siphoned target dies and lose 2 stacks if you die.",
    details: [
      [45, "Max HP Steal Per Bullet"],
      [20, "s", "Steal Duration"],
      [0.8, "s", "Max Frequency"]
    ]
  }
}
