import { ItemDescription } from "../Item";

export const TORMENT_PULSE: ItemDescription = {
  name: 'Torment Pulse',
  id: 395944548,
  type: 'spirit',
  tier: 3,
  stats: [
    [160, '', "Bonus Health"],
    [6, '', "Spirit Power"]
  ],
  passive: {
    description: "Periodically deals Spirit Damage to the 2 closest enemies nearby.",
    cooldown: 1.8,
    details: [
      [40, "", "Spirit Damage"], // + (0.33 * Spirit Power)
      [9, "m", "Pulse Radius"]
    ]
  }
}
