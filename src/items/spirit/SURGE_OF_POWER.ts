import { ItemDescription } from "../Item";

export const SURGE_OF_POWER: ItemDescription = {
  name: 'Surge of Power',
  id: 1292979587,
  type: 'spirit',
  tier: 3,
  stats: [
    [75, '', "Bonus Health"]
  ],
  passive: {
    description: "Imbue an ability with permanent Spirit Power. When that ability is used, gain bonus Movement Speed and Fire Rate Bonus for a duration of 6s.",
    cooldown: 10.5,
    details: [
      [34, "Spirit Power"],
      [10, "%", "Fire Rate Bonus (Conditional)"],
      [3, "m/s", "Move Speed (Conditional)"],
      [6, "s", "Duration"]
    ]
  }
}
