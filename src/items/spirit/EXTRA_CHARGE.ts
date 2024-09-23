import { ItemDescription } from "../Item";
import { RAPID_RECHARGE } from "./RAPID_RECHARGE";

export const EXTRA_CHARGE: ItemDescription = {
  name: 'Extra Charge',
  type: 'spirit',
  tier: 1,
  stats: [
    [1, '', "Bonus Ability Charges"],
    [10, '%', "Cooldown Reduction for Charged Abilities"],
    [6, '%', "Weapon Damage"]
  ],
  buildsInto: () => RAPID_RECHARGE
}
