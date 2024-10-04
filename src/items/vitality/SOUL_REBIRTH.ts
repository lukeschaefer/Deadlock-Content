import { ItemDescription, NEGATIVE } from "../Item";

export const SOUL_REBIRTH: ItemDescription = {
  name: 'Soul Rebirth',
  id: 4003032160,
  type: 'vitality',
  tier: 4,
  stats: [
    [18, '%', "Cooldown Reduction"],
    [20, '%', "Weapon Damage"],
    [12, '', "Spirit Power"],
    [15, 's', "Respawn Cooldown", NEGATIVE]
  ],
  passive: {
    description: "If you die, after 4s you will respawn at your death location with partial health.",
    cooldown: 200,
    details: [
      ["+", 50, "%", "Rebirth Health"]
    ]
  }
}
