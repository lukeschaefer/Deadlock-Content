import { ItemDescription } from "../Item";

export const REFRESHER: ItemDescription = {
  name: 'Refresher',
  type: 'spirit',
  tier: 4,
  stats: [
    [8, '%', "Spirit Resist"],
    [16, '%', "Bullet Resist"]
  ],
  active: {
    description: "Reset the cooldown of all your abilities and restore all your charges.",
    cooldown: 197
  }
}
