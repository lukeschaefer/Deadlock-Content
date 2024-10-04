import { ItemDescription } from "../Item";

export const ACTIVE_RELOAD: ItemDescription = {
  name: 'Active Reload',
  id: 381961617,
  type: 'weapon',
  tier: 2,
  stats: [
    [10, '%', "Weapon Damage"],
    [-20, '%', "Reload Time"]
  ],
  passive: {
    description: "While reloading, pressing [R] during the highlighted portion will instantly finish your reload and grant you Fire Rate and Bullet Lifesteal.",
    cooldown: 17,
    details: [
      [20, "%", "Fire Rate"],
      [20, "%", "Bullet Lifesteal"],
      [7, "s", "Duration"]
    ]
  }
}
