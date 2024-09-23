import { ItemDescription } from "../Item";

export const RETURN_FIRE: ItemDescription = {
  name: 'Return Fire',
  type: 'vitality',
  tier: 2,
  stats: [
    [125, '', "Bonus Health"],
    [7, '', "Spirit Power"],
    [7, '%', "Fire Rate"]
  ],
  active: {
    description: "Automatically fire a bullet towards any attacker who damages you with their abilities or weapon.",
    cooldown: 24,
    details: [
      [70, "%", "Bullet Damage Returned"],
      [30, "%", "Spirit Damage Returned"],
      [7, "s", "Duration"]
    ]
  }
}
