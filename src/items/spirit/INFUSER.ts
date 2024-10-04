import { ItemDescription } from "../Item";

export const INFUSER: ItemDescription = {
  name: 'Infuser',
  id: 1797283378,
  type: 'spirit',
  tier: 1,
  stats: [
    [50, '', "Bonus Health"],
    [10, '%', "Ammo"]
  ],
  active: {
    description: "Gain Spirit Power and Spirit Lifesteal.",
    cooldown: 35,
    details: [
      [16, "Spirit Power"],
      [20, "%", "Spirit Lifesteal"],
      [6, "s", "Duration"]
    ]
  }
}
