import { ItemDescription } from "../Item";

export const RICOCHET: ItemDescription = {
  name: 'Ricochet',
  id: 2480592370,
  type: 'weapon',
  tier: 4,
  stats: [
    [35, '%', "Ammo"],
    [10, '%', "Fire Rate"],
    [150, '', "Bonus Health"]
  ],
  passive: {
    description: "Your bullets will ricochet on enemies near your target, applying any bullet procs and dealing a percentage of the original damage.",
    details: [
      [60, "%", "Ricochet Damage"],
      [2, "Ricochet Targets"],
      [11, "m", "Ricochet Range"]
    ]
  }
}
