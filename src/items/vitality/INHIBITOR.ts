import { ItemDescription } from "../Item";

export const INHIBITOR: ItemDescription = {
  name: 'Inhibitor',
  id: 2037039379,
  type: 'vitality',
  tier: 4,
  stats: [
    [25, '%', "Weapon Damage"],
    [175, '', "Bonus Health"]
  ],
  passive: {
    description: "Your bullets apply Movement Slow and reduce the target's outgoing damage on hit.",
    details: [
      [25, "%", "Movement Slow (Conditional)"],
      ["-", 35, "%", "Damage Penalty (Conditional)"],
      [2.5, "s", "Debuff Duration"]
    ]
  }
}
