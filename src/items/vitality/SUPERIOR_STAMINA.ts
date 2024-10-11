import { ItemDescription } from "../Item";
import { EXTRA_STAMINA } from "./EXTRA_STAMINA";

export const SUPERIOR_STAMINA: ItemDescription = {
  name: 'Superior Stamina',
  id: 334300056,
  type: 'vitality',
  tier: 3,
  stats: [
    [3, '', "Stamina"],
    [25, '%', "Stamina Recovery"],
    [30, '%', "Air Jump Dash Distance"],
    [7, '%', "Fire Rate"],
    [8, '', "Spirit Power"]
  ],
  passive: {
    description: "Increases the number of Air Dashes and Air Jumps that can be performed before landing from 1 to 2."
  },
  preReq: () => EXTRA_STAMINA
}
