import { ItemDescription } from "../Item";
import { ENDURING_SPEED } from "./ENDURING_SPEED";

export const SPRINT_BOOTS: ItemDescription = {
  name: 'Sprint Boots',
  type: 'vitality',
  tier: 1,
  stats: [
    [2, 'm/s', "Sprint Speed"],
    [1, '', "Health Regen"],
    [4, '%', "Weapon Damage"]
  ],
  buildsInto: () => ENDURING_SPEED
}
