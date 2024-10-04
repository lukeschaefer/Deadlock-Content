import { ItemDescription } from "../Item";
import { BASIC_MAGAZINE } from "./BASIC_MAGAZINE";

export const TITANIC_MAGAZINE: ItemDescription = {
  name: 'Titanic Magazine',
  id: 2356412290,
  type: 'weapon',
  tier: 3,
  stats: [
    [100, '%', "Ammo"],
    [18, '%', "Weapon Damage"],
    [15, '%', "Bullet Resist"]
  ],
  preReq: () => BASIC_MAGAZINE
}
