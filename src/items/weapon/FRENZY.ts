import { ItemDescription } from "../Item";

export const FRENZY: ItemDescription = {
  name: 'Frenzy',
  id: 339443430,
  type: 'weapon',
  tier: 4,
  stats: [
    [12, '', "Ammo"],
    [30, '%', "Weapon Damage"],
    [200, '', "Bonus Health"]
  ],
  passive: {
    description: "While you are below 50% health, you gain stat bonuses.",
    details: [
      [4, "m/s", "Movement Speed (Conditional)"],
      [40, "%", "Fire Rate (Conditional)"],
      [45, "%", "Bullet Resist (Conditional)"]
    ]
  }
}
