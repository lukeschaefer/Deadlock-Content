import { ItemDescription } from "../Item";

export const MELEE_CHARGE: ItemDescription = {
  name: 'Melee Charge',
  type: 'weapon',
  tier: 2,
  stats: [
    [15, '%', "Weapon Damage"],
    [100, '', "Bonus Health"],
    [1, '', "Health Regen"]
  ],
  passive: {
    description: "Increases your Heavy Melee charge distance. When you perform a Heavy Melee attack against an enemy, your weapon reloads instantly."
  }
}
