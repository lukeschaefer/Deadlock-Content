import { ItemDescription } from "../Item";
import { IMPROVED_REACH } from "./IMPROVED_REACH";

export const MYSTIC_REACH: ItemDescription = {
  name: 'Mystic Reach',
  type: 'spirit',
  tier: 1,
  stats: [
    [16, '%', "Ability Range"],
    [6, '%', "Spirit Resist"]
  ],
  buildsInto: () => IMPROVED_REACH
}
