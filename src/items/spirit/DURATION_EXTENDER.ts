import { ItemDescription } from "../Item";
import { SUPERIOR_DURATION } from "./SUPERIOR_DURATION";

export const DURATION_EXTENDER: ItemDescription = {
  name: 'Duration Extender',
  id: 2951612397,
  type: 'spirit',
  tier: 2,
  stats: [
    [8, '', "Spirit Power"],
    [14, '%', "Ability Duration"],
    [100, '', "Bonus Health"],
    [1.75, '', "Health Regen"],
    [8, '%', 'Weapon Damage']
  ],
  buildsInto: () => SUPERIOR_DURATION
}
