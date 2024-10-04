import { ItemDescription } from "../Item";
import { DEBUFF_REDUCER } from "./DEBUFF_REDUCER";

export const DEBUFF_REMOVER: ItemDescription = {
  name: 'Debuff Remover',
  id: 3731635960,
  type: 'vitality',
  tier: 3,
  stats: [
    [125, '', "Bonus Health"],
    [20, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Reduces the duration of all negative effects applied to you.",
    details: [
      [35, "%", "Debuff Resist"]
    ]
  },
  active: {
    description: "Purge all negative effects currently applied to you. If any effects were removed, gain a movement speed bonus. Cannot be used while Stunned or Slept.",
    cooldown: 45,
    details: [
      [3, "m/s", "Movement Speed"],
      [3, "s", "Duration"]
    ]
  },
  preReq: () => DEBUFF_REDUCER
}
