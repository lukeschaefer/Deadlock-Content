import { ItemDescription } from "../Item";
import { IMPROVED_SPIRIT } from "./IMPROVED_SPIRIT";

export const EXTRA_SPIRIT: ItemDescription = {
  name: 'Extra Spirit',
  id: 968099481,
  type: 'spirit',
  tier: 1,
  stats: [
    [10, '', "Spirit Power"],
    [1, '', "Health Regen"],
    [35, '', "Bonus Health"]
  ],
  buildsInto: () => IMPROVED_SPIRIT
}
