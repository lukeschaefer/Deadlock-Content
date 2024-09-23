import { ItemDescription } from "../Item";

export const MAGIC_CARPET: ItemDescription = {
  name: 'Magic Carpet',
  type: 'spirit',
  tier: 4,
  stats: [
    [15, '', "Spirit Power"],
    [10, '%', "Ability Duration"],
    [150, '', "Bonus Health"]
  ],
  active: {
    description: "Summon a Magic Carpet that will fly you away and grant Bullet and Spirit Shields. Cannot use abilities while the carpet is being summoned. While flying, you are immune to slows and doing any action will dismiss the carpet.",
    cooldown: 30,
    details: [
      [400, "Bullet & Spirit Shield Health"],
      [7.7, "s", "Duration"],
      [1.3, "s", "Summon Duration"],
      [6, 'm/s', "Bonus Fly Speed"],
      [17.6, "s", "Shield Duration"]
    ]
  }
}
