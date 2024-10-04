import { ItemDescription } from "../Item";

export const SHADOW_WEAVE: ItemDescription = {
  name: 'Shadow Weave',
  id: 1798666702,
  type: 'weapon',
  tier: 4,
  stats: [
    [15, '', "Health Regen"],
    [300, '', "Spirit Shield Health"],
    [30, '%', "Ammo"]
  ],
  active: {
    description: "Become Stealthed. Whenever you take damage while Stealthed you get briefly revealed. Attacking or using an ability will end your stealth and start an ambush, temporarily granting you bonus Fire Rate and Spirit Power.",
    cooldown: 45,
    details: [
      [25, "s", "Invisible Status Duration"],
      ["+", 2, "m/s", "Invis Sprint Speed"],
      [18, "m", "Spot Radius"],
      ["+", 40, "%", "Ambush Fire Rate (Conditional)"],
      ["+", 55, "Ambush Spirit Power (Conditional)"],
      [8, "s", "Ambush Duration"]
    ]
  }
}
