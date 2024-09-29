import { ItemDescription } from "../Item";
import { SUPERIOR_STAMINA } from "./SUPERIOR_STAMINA";

export const EXTRA_STAMINA: ItemDescription = {
  name: 'Extra Stamina',
  type: 'vitality',
  tier: 1,
  stats: [
    [1, '', "Stamina"],
    [14, '%', "Stamina Recovery"],
    [7, '%', "Fire Rate"]
  ],
  buildsInto: () => SUPERIOR_STAMINA
}
