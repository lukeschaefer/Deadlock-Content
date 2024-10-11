import { ItemDescription } from "../Item";

export const VAMPIRIC_BURST: ItemDescription = {
  name: 'Vampiric Burst',
  id: 1055679805,
  type: 'weapon',
  tier: 4,
  stats: [
    [2, 'm/s', "Movement Speed"],
    [25, '%', "Weapon Damage"],
    [150, '', "Bonus Health"]
  ],
  active: {
    description: "Grants Lifesteal, Fire Rate, and Ammo. This added Ammo is not limited by your max magazine size.",
    cooldown: 34,
    details: [
      [100, "%", "Bullet Lifesteal"],
      [40, "%", "Fire Rate"],
      [75, "%", "Ammo"],
      [4.5, "s", "Duration"]
    ]
  }
}
