import { ItemDescription } from "../Item";
import { DURATION_EXTENDER } from "./DURATION_EXTENDER";

export const SUPERIOR_DURATION: ItemDescription = {
  name: 'Superior Duration',
  type: 'spirit',
  tier: 3,
  stats: [
    [32, '%', "Imbued Ability Duration"],
    [26, '%', "Non-Imbued Ability Duration"],
    [175, '', "Bonus Health"],
    [15, '%', "Weapon Damage"],
    [4, '', "Health Regen"]
  ],
  preReq: () => DURATION_EXTENDER
}
