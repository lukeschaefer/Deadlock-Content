import { ItemDescription } from "../Item";
import { DEBUFF_REMOVER } from "./DEBUFF_REMOVER";

export const DEBUFF_REDUCER: ItemDescription = {
  name: 'Debuff Reducer',
  id: 1047818222,
  type: 'vitality',
  tier: 2,
  stats: [
    [75, '', "Bonus Health"],
    [6, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Reduces the duration of all negative effects applied to you.",
    details: [
      [30, "%", "Debuff Resist"]
    ]
  },
  buildsInto: () => DEBUFF_REMOVER
}
