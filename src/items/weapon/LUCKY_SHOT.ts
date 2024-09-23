import { ItemDescription } from "../Item";

export const LUCKY_SHOT: ItemDescription = {
  name: 'Lucky Shot',
  type: 'weapon',
  tier: 4,
  stats: [
    [30, '%', "Ammo"]
  ],
  passive: {
    description: "Your bullets have a chance to be empowered, causing them to deal bonus damage and Slow on hit.",
    details: [
      [35, "%", "Proc Chance"],
      [80, "%", "Bonus Damage"],
      [30, "%", "Movement Slow (Conditional)"],
      [1.5, "s", "Slow Duration"]
    ]
  }
}
