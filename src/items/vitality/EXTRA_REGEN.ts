import { ItemDescription } from "../Item";

export const EXTRA_REGEN: ItemDescription = {
  name: 'Extra Regen',
  type: 'vitality',
  tier: 1,
  stats: [
    [2.8, '', "Health Regen"],
    [8, '%', "Ammo"],
    [25, '', "Bonus Health"]
  ]
}
