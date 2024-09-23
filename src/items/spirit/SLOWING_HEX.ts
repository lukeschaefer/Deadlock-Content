import { ItemDescription } from "../Item";

export const SLOWING_HEX: ItemDescription = {
  name: 'Slowing Hex',
  type: 'spirit',
  tier: 2,
  stats: [
    [13, '', "Spirit Power"],
    [1, 'm/s', "Sprint Speed"]
  ],
  active: {
    description: "Deals Spirit Damage and Slows targets' movement and dashes. Also silences their movement-based items and abilities. Does not affect the target's stamina usage.",
    cooldown: 25,
    details: [
      [70, "", "Spirit Damage"], // (0.59 * Spirit Power)
      [30, "%", "Movement Slow"],
      [25, "m", "Cast Range"],
      [3, "s", "Duration"]
    ]
  }
}
