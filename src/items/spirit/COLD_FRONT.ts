import { ItemDescription } from "../Item";

export const COLD_FRONT: ItemDescription = {
  name: 'Cold Front',
  type: 'spirit',
  tier: 2,
  stats: [
    [8, '', "Spirit Power"],
    [10, '%', "Spirit Resist"]
  ],
  active: {
    description: "Release an expanding ice blast that deals Spirit Damage and Slows targets it hits.",
    cooldown: 32,
    details: [
      [75, "", "Spirit Damage"], // + (1.5 * Spirit Power)
      [40, "%", "Movement Slow"],
      [14, "m", "End Radius"],
      [3, "s", "Duration"]
    ]
  }
}
