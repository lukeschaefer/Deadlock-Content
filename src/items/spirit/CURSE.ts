import { ItemDescription } from "../Item";

export const CURSE: ItemDescription = {
  name: 'Curse',
  id: 2617435668,
  type: 'spirit',
  tier: 4,
  stats: [
    [8, '', "Spirit Power"],
    [20, '%', "Weapon Damage"]
  ],
  active: {
    description: "Curses an enemy—interrupting, Silencing, Disarming, and preventing item usage.",
    cooldown: 50,
    details: [
      [3.25, "s", "Status Duration"],
      [20, "m", "Cast Range"]
    ]
  }
}
