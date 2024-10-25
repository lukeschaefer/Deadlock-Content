import { ItemDescription } from "../Item";

export const BURST_FIRE: ItemDescription = {
  name: 'Burst Fire',
  id: 2739107182,
  type: 'weapon',
  tier: 3,
  stats: [
    [12, '%', "Fire Rate"],
    [50, '%', "Slide Distance"],
    [20, '%', "Slow Resistance"],
  ],
  passive: {
    description: "Briefly gain Fire Rate and Move Speed when one of your bullets hits an enemy hero.",
    cooldown: 8,
    details: [
      [30, "%", "Fire Rate (Conditional)"],
      [2, "m/s", "Move Speed (Conditional)"],
      [4, "s", "Duration"]
    ]
  }
}
