import { ItemDescription } from "../Item";

export const TOXIC_BULLETS: ItemDescription = {
  name: 'Toxic Bullets',
  id: 3696726732,
  type: 'weapon',
  tier: 3,
  stats: [
    [100, '', "Bonus Health"]
  ],
  passive: {
    description: "Your bullets build up a Bleed on enemies, causing them to lose a percentage of their current health over time. Also applies Healing Reduction on the bleeding target.",
    details: [
      [5, "%/sec", "Bleed Damage"],
      [-65, "%", "Healing Reduction"],
      [3, "s", "Duration"],
      [10.3, "%", "Buildup Per Shot"]
    ]
  }
}