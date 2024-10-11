import { ItemDescription } from "../Item";

export const RESTORATIVE_SHOT: ItemDescription = {
  name: 'Restorative Shot',
  id: 3862866912,
  type: 'weapon',
  tier: 1,
  stats: [
    [7, '%', "Bullet Resist"],
    [7, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Your next bullet will heal you based on what target you hit.",
    cooldown: 5.5,
    details: [
      [40, "Healing from Heroes"],
      [15, "Healing from NPCs"]
    ]
  }
}