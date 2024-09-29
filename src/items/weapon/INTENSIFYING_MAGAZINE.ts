import { ItemDescription } from "../Item";

export const INTENSIFYING_MAGAZINE: ItemDescription = {
  name: 'Intensifying Magazine',
  type: 'weapon',
  tier: 3,
  stats: [
    [25, '%', "Ammo"],
    [20, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Increases Weapon Damage as you continuously fire your weapon.",
    details: [
      [60, "%", "Max Weapon Damage (Conditional)"],
      [3, "s", "Time for Max Damage"]
    ]
  }
}
