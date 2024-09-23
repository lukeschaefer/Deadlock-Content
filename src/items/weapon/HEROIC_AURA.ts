import { ItemDescription } from "../Item";

export const HEROIC_AURA: ItemDescription = {
  name: 'Heroic Aura',
  type: 'weapon',
  tier: 3,
  stats: [
    [20, '%', "Bullet Lifesteal"],
    [150, '', "Bonus Health"],
    [1, 'm/s', "Movement Speed"]
  ],
  passive: {
    description: "Provides Fire Rate to nearby player minions.",
    details: [
      [40, "%", "Minions' Fire Rate (Conditional)"],
      [20, "m", "Radius"]
    ]
  },
  active: {
    description: "Provides bonus Movement Speed and Fire Rate to you and nearby allies.",
    cooldown: 30,
    details: [
      [3, "m/s", "Movement Speed (Conditional)"],
      [25, "%", "Fire Rate (Conditional)"],
      [30, "m", "Active Radius"],
      [6, "s", "Duration"]
    ]
  }
}
