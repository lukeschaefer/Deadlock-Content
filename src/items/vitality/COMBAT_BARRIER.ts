import { ItemDescription } from "../Item";

export const COMBAT_BARRIER: ItemDescription = {
  name: 'Combat Barrier',
  type: 'vitality',
  tier: 2,
  stats: [
    [300, '', "Bullet Shield Health"]
  ],
  passive: {
    description: "When you have a Bullet Shield, gain Weapon Damage and Fire Rate.",
    details: [
      [28, "%", "Weapon Damage While Shielded"],
      [8, "%", "Fire Rate While Shielded"]
    ]
  }
}
