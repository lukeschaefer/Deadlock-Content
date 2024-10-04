import { ItemDescription } from "../Item";

export const UNSTOPPABLE: ItemDescription = {
  name: 'Unstoppable',
  id: 3357231760,
  type: 'vitality',
  tier: 4,
  stats: [
    [150, '', "Bonus Health"],
    [15, '%', "Spirit Resist"],
    [1, 'm/s', "Movement Speed"],
    [12, '', "Spirit Power"]
  ],
  active: {
    description: "Suppress negative status effects and become Immune to Stun, Silence, Sleep, Root, and Disarm.",
    cooldown: 60,
    details: [
      [6, "s", "Duration"]
    ]
  }
}
