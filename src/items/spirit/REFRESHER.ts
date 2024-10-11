import { ItemDescription } from "../Item";

export const REFRESHER: ItemDescription = {
  name: 'Refresher',
  id: 677738769,
  type: 'spirit',
  tier: 4,
  stats: [
    [8, '%', "Spirit Resist"],
    [16, '%', "Bullet Resist"]
  ],
  active: {
    description: "Reset the cooldown of all your abilities and restore all your charges.",
    cooldown: 230
  }
}
