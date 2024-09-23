import { ItemDescription } from "../Item";
import { BULLET_ARMOR } from "./BULLET_ARMOR";

export const IMPROVED_BULLET_ARMOR: ItemDescription = {
  name: 'Improved Bullet Armor',
  type: 'vitality',
  tier: 3,
  stats: [
    [45, '%', "Bullet Resist"],
    [10, '%', "Weapon Damage"]
  ],
  preReq: () => BULLET_ARMOR
}
