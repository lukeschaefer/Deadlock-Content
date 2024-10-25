import { ItemDescription } from "../Item";
import { FORTITUDE } from "./FORTITUDE";

export const EXTRA_HEALTH: ItemDescription = {
  name: 'Extra Health',
  id: 3633614685,
  type: 'vitality',
  tier: 1,
  stats: [
    [160, '', "Bonus Health"],
    [6, '%', "Weapon Damage"]
  ],
  buildsInto: () => FORTITUDE
}
