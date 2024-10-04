import { ItemDescription } from "../Item";
import { EXTRA_CHARGE } from "./EXTRA_CHARGE";

export const RAPID_RECHARGE: ItemDescription = {
  name: 'Rapid Recharge',
  id: 787198704,
  type: 'spirit',
  tier: 3,
  stats: [
    [2, '', "Bonus Ability Charges"],
    [55, '%', "Time Between Charges Reduction"],
    [30, '%', "Charged Ability Cooldown Reduction"],
    [12, '%', "Weapon Damage"]
  ],
  preReq: () => EXTRA_CHARGE
}
