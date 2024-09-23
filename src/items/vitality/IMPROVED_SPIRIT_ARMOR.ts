import { ItemDescription } from "../Item";
import { SPIRIT_ARMOR } from "./SPIRIT_ARMOR";

export const IMPROVED_SPIRIT_ARMOR: ItemDescription = {
  name: 'Improved Spirit Armor',
  type: 'vitality',
  tier: 3,
  stats: [
    [45, '%', "Spirit Resist"],
    [8, '', "Spirit Power"]
  ],
  preReq: () => SPIRIT_ARMOR
}
