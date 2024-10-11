import { ItemDescription } from "../Item";

export const COMBAT_BARRIER: ItemDescription = {
  name: 'Combat Barrier',
  id: 1235347618,
  type: 'vitality',
  tier: 2,
  stats: [
    [325, '', "Bullet Shield Health"]
  ],
  passive: {
    description: "When you have a Bullet Shield, gain Weapon Damage and Fire Rate.",
    details: [
      [22, "%", "Weapon Damage While Shielded"],
      [6, "%", "Fire Rate While Shielded"]
    ]
  }
}
