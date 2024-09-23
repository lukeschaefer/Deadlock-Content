import { ItemDescription } from "../Item";

export const COLOSSUS: ItemDescription = {
  name: 'Colossus',
  type: 'vitality',
  tier: 4,
  stats: [
    [600, '', "Bonus Health"],
    [20, '%', "Melee Damage"],
    [20, '%', "Weapon Damage"]
  ],
  active: {
    description: "Gain Bullet and Spirit Resist, and slow the movement and dash speed of enemies nearby. Your model size grows by 20%.",
    cooldown: 45,
    details: [
      [40, "%", "Bullet Resist (Conditional)"],
      [40, "%", "Spirit Resist (Conditional)"],
      [35, "%", "Movement Slow (Conditional)"],
      [10, "m", "Radius"],
      [7, "s", "Duration"]
    ]
  }
}
