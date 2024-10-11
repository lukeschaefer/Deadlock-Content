import { ItemDescription } from "../Item";

export const VEIL_WALKER: ItemDescription = {
  name: 'Veil Walker',
  id: 865958998,
  type: 'vitality',
  tier: 3,
  stats: [
    [200, '', "Bullet Shield Health"],
    [200, '', "Spirit Shield Health"],
    [12, '%', "Ammo"],
    [10, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Walking through a cosmic veil grants you Stealth, increased Movement Speed, restores all Bullet and Spirit Shields, and grants bonus Fire Rate for your next magazine.",
    cooldown: 17,
    details: [
      ["+", 4, "m/s", "Invis Move Speed (Conditional)"],
      [5, "s", "Invisibility Duration"]
    ]
  }
}
