import { ItemDescription } from "../Item";
import { TITANIC_MAGAZINE } from "./TITANIC_MAGAZINE";

export const BASIC_MAGAZINE: ItemDescription = {
  name: 'Basic Magazine',
  id: 1548066885,
  type: 'weapon',
  tier: 1,
  stats: [
    [26, '%', "Ammo"],
    [15, '%', "Weapon Damage"]
  ],
  buildsInto: () => TITANIC_MAGAZINE
}
