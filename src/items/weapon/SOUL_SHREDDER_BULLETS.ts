import { ItemDescription } from "../Item";

export const SOUL_SHREDDER_BULLETS: ItemDescription = {
  name: 'Soul Shredder Bullets',
  type: 'weapon',
  tier: 2,
  stats: [
    [6, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Your bullets apply a debuff that amplifies your Spirit Damage against the target and grants you Spirit Lifesteal against them.",
    details: [
      [10, "%", "Spirit Amp"],
      [20, "%", "Spirit Lifesteal"],
      [6, "s", "Debuff Duration"]
    ]
  }
}
