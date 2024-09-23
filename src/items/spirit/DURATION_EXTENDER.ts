import { ItemDescription } from "../Item";
import { SUPERIOR_DURATION } from "./SUPERIOR_DURATION";

export const DURATION_EXTENDER: ItemDescription = {
  name: 'Duration Extender',
  type: 'spirit',
  tier: 2,
  stats: [
    [8, '', "Spirit Power"],
    [16, '%', "Ability Duration"],
    [100, '', "Bonus Health"],
    [1.75, '', "Health Regen"]
  ],
  buildsInto: () => SUPERIOR_DURATION
}
