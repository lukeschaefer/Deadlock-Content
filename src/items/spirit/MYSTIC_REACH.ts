import { ItemDescription } from "../Item";
import { IMPROVED_REACH } from "./IMPROVED_REACH";

export const MYSTIC_REACH: ItemDescription = {
  name: 'Mystic Reach',
  id: 754480263,
  type: 'spirit',
  tier: 1,
  stats: [
    [15, '%', "Ability Range"],
    [7, '%', "Bullet Resist"]
  ],
  buildsInto: () => IMPROVED_REACH
}
