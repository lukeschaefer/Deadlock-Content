import { ItemDescription } from "../Item";

export const MONSTER_ROUNDS: ItemDescription = {
  name: 'Monster Rounds',
  type: 'weapon',
  tier: 1,
  stats: [
    [35, '%', "Weapon Damage vs NPCs"],
    [35, '%', "Bullet Resist vs NPCs"],
    [50, '', "Bonus Health"],
    [1, '', "Health Regen"]
  ]
}
