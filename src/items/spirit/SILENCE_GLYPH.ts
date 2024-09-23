import { ItemDescription } from "../Item";

export const SILENCE_GLYPH: ItemDescription = {
  name: 'Silence Glyph',
  type: 'spirit',
  tier: 3,
  stats: [
    [150, '', "Spirit Shield Health"],
    [1, 'm/s', "Sprint Speed"]
  ],
  active: {
    description: "Fires a projectile which silences and damages the target. Silence does not interrupt channeling abilities.",
    cooldown: 32,
    details: [
      [25, "m", "Cast Range"],
      [3, "s", "Duration"],
      [100, "", "Spirit Damage"] // (1.00 * Spirit Power)
    ]
  }
}
