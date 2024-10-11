import { ItemDescription } from "../Item";

export const RETURN_FIRE: ItemDescription = {
  name: 'Return Fire',
  id: 3361075077,
  type: 'vitality',
  tier: 2,
  stats: [
    [125, '', "Bonus Health"],
    [9, '', "Spirit Power"],
  ],
  active: {
    description: "Automatically fire a bullet towards any attacker who damages you with their abilities or weapon.",
    cooldown: 30,
    details: [
      [20, "%", "Bullet Resistance"],
      [60, "%", "Bullet Damage Returned"],
      [30, "%", "Spirit Damage Returned"],
      [7, "s", "Duration"]
    ]
  }
}
