import { ItemDescription } from "../Item";

export const BULLET_RESIST_SHREDDER: ItemDescription = {
  name: 'Bullet Resist Shredder',
  id: 2971868509,
  type: 'spirit',
  tier: 2,
  stats: [
    [8, '', "Spirit Power"],
    [100, '', "Bonus Health"],
    [15, '%', "Melee Resist"]
  ],
  passive: {
    description: "Reduces Bullet Resist on enemies when you deal Spirit Damage.",
    details: [
      ["-", 12, "%", "Bullet Resist"],
      [8, "s", "Duration"]
    ]
  }
}
