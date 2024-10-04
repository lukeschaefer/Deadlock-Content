import { ItemDescription } from "../Item";

export const MYSTIC_SHOT: ItemDescription = {
  name: 'Mystic Shot',
  id: 395867183,
  type: 'weapon',
  tier: 2,
  stats: [
    [12, '%', "Weapon Damage"],
    [4, '', "Spirit Power"]
  ],
  passive: {
    description: "Your next bullet deals bonus Spirit Damage.",
    cooldown: 6,
    details: [
      [65, "Spirit Damage"]
    ]
  }
}
