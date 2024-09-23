import { ItemDescription } from "../Item";
import { SUPERIOR_COOLDOWN } from "./SUPERIOR_COOLDOWN";

export const IMPROVED_COOLDOWN: ItemDescription = {
  name: 'Improved Cooldown',
  type: 'spirit',
  tier: 2,
  stats: [
    [8, '', "Spirit Power"],
    [16, '%', "Cooldown Reduction"],
    [1.5, '', "Health Regen"]
  ],
  buildsInto: () => SUPERIOR_COOLDOWN
}
