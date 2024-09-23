import { ItemDescription } from "../Item";

export const REFRESHER: ItemDescription = {
  name: 'Refresher',
  type: 'spirit',
  tier: 4,
  stats: [
    [16, '%', "Spirit Resist"],
    [8, '%', "Bullet Resist"]
  ],
  active: {
    description: "Reset the cooldown of all your abilities and restore all your charges.",
    cooldown: 197
  }
}
