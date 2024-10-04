import { ItemDescription } from "../Item";

export const WARP_STONE: ItemDescription = {
  name: 'Warp Stone',
  id: 3270001687,
  type: 'weapon',
  tier: 3,
  stats: [
    [20, '%', "Weapon Damage"],
    [8, '', "Spirit Power"]
  ],
  active: {
    description: "Teleport straight ahead, gaining Bullet Resist.",
    cooldown: 15,
    details: [
      [13, "m", "Teleport Range"],
      [30, "%", "Bullet Resist (Conditional)"],
      [5, "s", "Buff Duration"]
    ]
  }
}
