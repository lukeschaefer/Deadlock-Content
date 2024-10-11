import { ItemDescription } from "../Item";
import { SUPERIOR_STAMINA } from "./SUPERIOR_STAMINA";

export const EXTRA_STAMINA: ItemDescription = {
  name: 'Extra Stamina',
  id: 4139877411,
  type: 'vitality',
  tier: 1,
  stats: [
    [25, '', "Bonus Health"],
    [1, '', "Stamina"],
    [16, '%', "Stamina Recovery"],
    [6, '%', "Fire Rate"]
  ],
  buildsInto: () => SUPERIOR_STAMINA
}
