import { ItemDescription } from "../Item";
import { IMPROVED_SPIRIT } from "./IMPROVED_SPIRIT";

export const BOUNDLESS_SPIRIT: ItemDescription = {
  name: 'Boundless Spirit',
  id: 3612042342,
  type: 'spirit',
  tier: 4,
  stats: [
    [65, '', "Spirit Power"],
    [30, '%', "Weapon Damage"],
    [300, '', "Bonus Health"],
    [15, '', "Health Regen"],
    [3, 'm/s', "Sprint Speed"]
  ],
  preReq: () => IMPROVED_SPIRIT
}
