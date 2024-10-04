import { ItemDescription } from "../Item";

export const BERSERKER: ItemDescription = {
  name: 'Berserker',
  id: 1414319208,
  type: 'weapon',
  tier: 2,
  stats: [
    [4, '', "Ammo"],
    [7, '%', "Bullet Resist"]
  ],
  passive: {
    description: "Your Weapon Damage increases as you take sustained damage.",
    details: [
      [5, "%", "Weapon Damage per Stack"],
      [100, "Damage taken to Stack"],
      [10, "Max Stacks"],
      [10, "s", "Duration"]
    ]
  }
}
