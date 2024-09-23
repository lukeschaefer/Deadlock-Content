import { ItemDescription } from "../Item";
import { HIGH_VELOCITY_MAG } from "./HIGH_VELOCITY_MAG";

export const HEADHUNTER: ItemDescription = {
  name: 'Headhunter',
  type: 'weapon',
  tier: 3,
  stats: [
    [50, '%', "Bullet Speed"],
    [15, '%', "Weapon Damage"],
    [150, '', "Bullet Shield Health"]
  ],
  passive: {
    description: "Landing a headshot deals bonus damage, heals you for a portion of your Max HP, and briefly grants you bonus move speed.",
    details: [
      [140, "Bonus Head Shot Damage"],
      [8, "%", "Heal per Headshot"],
      [2, "m/s", "Bonus Move Speed"],
      [3, "s", "Duration"]
    ]
  },
  preReq: () => HIGH_VELOCITY_MAG
}
