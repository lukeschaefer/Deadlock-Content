import { ItemDescription } from "../Item";

export const ETHEREAL_SHIFT: ItemDescription = {
  name: 'Ethereal Shift',
  id: 2533252781,
  type: 'spirit',
  tier: 3,
  stats: [
    [6, 'Spirit Power']
  ],
  active: {
    description: "You enter a void state and become untargetable and invincible for a short duration, during which you cannot move or perform any actions. Afterwards you gain increased movement speed and spirit resist.",
    cooldown: 30,
    details: [
      [3.5, "s", "Duration"],
      ["+", 3, "Move Speed"],
      ["+", 40, '%', "Spirit Resist"],
      [10, "s", "Bonus Duration"]
    ]
  }
}
