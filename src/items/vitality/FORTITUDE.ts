import { ItemDescription } from "../Item";

export const FORTITUDE: ItemDescription = {
  name: 'Fortitude',
  id: 3585132399,
  type: 'vitality',
  tier: 3,
  stats: [
    [325, '', "Bonus Health"]
  ],
  passive: {
    description: "After not taking damage for 11s, gain 4% Max Health Regen.\n\nWhen you are above 75% health, you have bonus Weapon Damage and Movement Speed.",
    details: [
      ["+", 4, "%", "Max Health Regen"],
      ["+", 25, "%", "Weapon Damage (Conditional)"],
      ["+", 2, "m/s", "Move Speed (Conditional)"]
    ]
  }
}
