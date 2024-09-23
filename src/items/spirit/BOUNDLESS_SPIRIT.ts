import { ItemDescription } from "../Item";
import { IMPROVED_SPIRIT } from "./IMPROVED_SPIRIT";

export const BOUNDLESS_SPIRIT: ItemDescription = {
  name: 'Boundless Spirit',
  type: 'spirit',
  tier: 4,
  stats: [
    [60, '', "Spirit Power"],
    [25, '%', "Weapon Damage"],
    [300, '', "Bonus Health"],
    [15, '', "Health Regen"],
    [3, 'm/s', "Sprint Speed"]
  ],
  preReq: () => IMPROVED_SPIRIT
}
