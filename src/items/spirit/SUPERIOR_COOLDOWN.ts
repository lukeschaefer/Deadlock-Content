import { ItemDescription } from "../Item";
import { IMPROVED_COOLDOWN } from "./IMPROVED_COOLDOWN";

export const SUPERIOR_COOLDOWN: ItemDescription = {
  name: 'Superior Cooldown',
  id: 3261353684,
  type: 'spirit',
  tier: 3,
  stats: [
    [32, '%', "Imbued Ability Cooldown Reduction"],
    [24, '%', "Non-Imbued Ability Cooldown Reduction"],
    [4, '', "Health Regen"]
  ],
  preReq: () => IMPROVED_COOLDOWN
}
