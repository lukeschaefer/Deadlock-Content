import { ItemDescription } from "../Item";
import { IMPROVED_BULLET_ARMOR } from "./IMPROVED_BULLET_ARMOR";

export const BULLET_ARMOR: ItemDescription = {
  name: 'Bullet Armor',
  id: 3713423303,
  type: 'vitality',
  tier: 2,
  stats: [
    [25, '%', "Bullet Resist"],
    [6, '%', "Weapon Damage"]
  ],
  buildsInto: () => IMPROVED_BULLET_ARMOR
}
