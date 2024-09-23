import { ItemDescription } from "../Item";

export const DIVINERS_KEVLAR: ItemDescription = {
  name: "Diviner's Kevlar",
  type: 'spirit',
  tier: 4,
  stats: [
    [20, '%', "Spirit Lifesteal"],
    [12, '%', "Cooldown Reduction"]
  ],
  passive: {
    description: "Upon casting an ultimate ability gain temporary Bullet Shield, Spirit Shield, and Spirit Power.",
    cooldown: 60,
    details: [
      [700, "", "Bullet Shield"],
      [700, "", "Spirit Shield"],
      [40, "Spirit Power"],
      [15, "s", "Duration"]
    ]
  }
}
