import { ItemDescription } from "../Item";

export const PHANTOM_STRIKE: ItemDescription = {
  name: 'Phantom Strike',
  id: 1371725689,
  type: 'vitality',
  tier: 4,
  stats: [
    [15, '%', "Spirit Resist"],
    [30, '%', "Weapon Damage"]
  ],
  active: {
    description: "Teleport to an enemy target, applying Disarm, Slow, and dealing damage.",
    cooldown: 25,
    details: [
      [3, "s", "Disarm & Slow Duration"],
      ["+", 50, "%", "Movement Slow (Conditional)"],
      [150, "Damage"],
      [25, "m", "Cast Range"]
    ]
  }
}
