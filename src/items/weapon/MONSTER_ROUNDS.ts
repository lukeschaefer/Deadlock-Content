import { ItemDescription } from "../Item";

export const MONSTER_ROUNDS: ItemDescription = {
  name: 'Monster Rounds',
  id: 1009965641,
  type: 'weapon',
  tier: 1,
  stats: [
    [30, '%', "Weapon Damage vs NPCs"],
    [25, '%', "Bullet Resist vs NPCs"],
    [50, '', "Bonus Health"],
    [1, '', "Health Regen"]
  ]
}
