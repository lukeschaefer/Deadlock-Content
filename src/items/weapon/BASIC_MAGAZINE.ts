import { ItemDescription } from "../Item";
import { TITANIC_MAGAZINE } from "./TITANIC_MAGAZINE";

export const BASIC_MAGAZINE: ItemDescription = {
  name: 'Basic Magazine',
  type: 'weapon',
  tier: 1,
  stats: [
    [24, '%', "Ammo"],
    [15, '%', "Weapon Damage"]
  ],
  buildsInto: () => TITANIC_MAGAZINE
}
