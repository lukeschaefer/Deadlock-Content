import { ItemDescription } from "../Item";
import { SUPERIOR_COOLDOWN } from "./SUPERIOR_COOLDOWN";

export const IMPROVED_COOLDOWN: ItemDescription = {
  name: 'Improved Cooldown',
  id: 380806748,
  type: 'spirit',
  tier: 2,
  stats: [
    [8, '', "Spirit Power"],
    [16, '%', "Cooldown Reduction"],
    [1.5, '', "Health Regen"],
    [75, 'Spirit Shield']
  ],
  buildsInto: () => SUPERIOR_COOLDOWN
}
