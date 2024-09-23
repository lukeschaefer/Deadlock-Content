import { ItemDescription } from "../Item";

export const CRIPPLING_HEADSHOT: ItemDescription = {
  name: 'Crippling Headshot',
  type: 'weapon',
  tier: 4,
  stats: [
    [20, '%', "Weapon Damage"],
    [10, '%', "Bullet Lifesteal"],
    [10, '%', "Spirit Lifesteal"]
  ],
  passive: {
    description: "Headshots reduce target's Bullet and Spirit Resist.",
    details: [
      ["-", 24, "%", "Bullet Resist Reduction"],
      ["-", 24, "%", "Spirit Resist Reduction"],
      [5, "s", "Debuff Duration"]
    ]
  }
}
