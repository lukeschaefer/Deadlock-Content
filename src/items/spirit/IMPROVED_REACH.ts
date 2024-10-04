import { ItemDescription } from "../Item";
import { MYSTIC_REACH } from "./MYSTIC_REACH";

export const IMPROVED_REACH: ItemDescription = {
  name: 'Improved Reach',
  id: 1193964439,
  type: 'spirit',
  tier: 3,
  stats: [
    [35, '%', "Imbued Ability Range"],
    [25, '%', "Non-Imbued Ability Range"],
    [12, '%', "Bullet Resist"],
    [8, '', "Spirit Power"]
  ],
  preReq: () => MYSTIC_REACH
}
