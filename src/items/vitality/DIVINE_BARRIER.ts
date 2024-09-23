import { ItemDescription } from "../Item";

export const DIVINE_BARRIER: ItemDescription = {
  name: 'Divine Barrier',
  type: 'vitality',
  tier: 2,
  stats: [
    [1, 'm/s', "Sprint Speed"],
    [75, '', "Bonus Health"],
    [8, '%', "Ability Range"]
  ],
  active: {
    description: "Provide the target with Bullet Shield, Spirit Shield, and Movement Speed. Can be self-cast.",
    cooldown: 28,
    details: [
      [300, "Bullet Shield"],
      [300, "Spirit Shield"],
      [2, "m/s", "Move Speed"],
      [5, "s", "Duration"],
      [35, "m", "Cast Range"]
    ]
  }
}
