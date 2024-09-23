import { ItemDescription } from "../Item";

export const KNOCKDOWN: ItemDescription = {
  name: 'Knockdown',
  type: 'spirit',
  tier: 3,
  stats: [
    [1, '', "Stamina"],
    [200, '', "Spirit Shield Health"],
    [6, '', "Spirit Power"]
  ],
  active: {
    description: "Target is knocked down and Stunned after a 2s delay, interrupting and temporarily preventing them from taking any action.",
    cooldown: 45,
    details: [
      [0.9, "s", "Stun Duration"],
      [45, "m", "Cast Range"]
    ]
  }
}
