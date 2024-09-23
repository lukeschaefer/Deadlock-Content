import { ItemDescription } from "../Item";
import { IMPROVED_SPIRIT } from "./IMPROVED_SPIRIT";

export const EXTRA_SPIRIT: ItemDescription = {
  name: 'Extra Spirit',
  type: 'spirit',
  tier: 1,
  stats: [
    [9, '', "Spirit Power"],
    [1, '', "Health Regen"],
    [35, '', "Bonus Health"]
  ],
  buildsInto: () => IMPROVED_SPIRIT
}
