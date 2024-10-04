import { ItemDescription } from "../Item";

export const SPIRIT_STRIKE: ItemDescription = {
  name: 'Spirit Strike',
  id: 465043967,
  type: 'spirit',
  tier: 1,
  stats: [
    [80, '', "Spirit Shield Health"],
    [12, '%', "Melee Damage"]
  ],
  passive: {
    description: "When you perform a Light or Heavy Melee attack against a hero, deal extra Spirit Damage with the attack and reduce the target's Spirit Resist.",
    cooldown: 8.5,
    details: [
     // ["x", "Spirit Damage (adjusted by Spirit Power)"],
      ["-", 12, "%", "Spirit Resist"],
      [11, "s", "Duration"]
    ]
  }
}
