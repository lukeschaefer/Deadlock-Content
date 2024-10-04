import { ItemDescription } from "../Item";

export const ETHEREAL_SHIFT: ItemDescription = {
  name: 'Ethereal Shift',
  id: 2533252781,
  type: 'spirit',
  tier: 3,
  stats: [],
  active: {
    description: "You enter a void state and become untargetable and invincible for a short duration, during which you cannot move or perform any actions. Afterwards you instantly reload and gain bonus Spirit Power.",
    cooldown: 30,
    details: [
      [3.5, "s", "Duration"],
      [14, "Bonus Spirit Power"],
      [10, "s", "Bonus Spirit Duration"]
    ]
  }
}
