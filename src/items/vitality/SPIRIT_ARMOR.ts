import { ItemDescription } from "../Item";
import { IMPROVED_SPIRIT_ARMOR } from "./IMPROVED_SPIRIT_ARMOR";

export const SPIRIT_ARMOR: ItemDescription = {
  name: 'Spirit Armor',
  id: 223594321,
  type: 'vitality',
  tier: 2,
  stats: [
    [20, '%', "Spirit Resist"],
    [5, '', "Spirit Power"]
  ],
  buildsInto: () => IMPROVED_SPIRIT_ARMOR
}
