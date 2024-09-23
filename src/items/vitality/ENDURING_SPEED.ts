import { ItemDescription } from "../Item";
import { SPRINT_BOOTS } from "./SPRINT_BOOTS";

export const ENDURING_SPEED: ItemDescription = {
  name: 'Enduring Speed',
  type: 'vitality',
  tier: 2,
  stats: [
    [1.4, 'm/s', "Movement Speed"],
    [2, 'm/s', "Sprint Speed"],
    [75, '', "Bonus Health"],
    [1.5, '', "Health Regen"]
  ],
  passive: {
    description: "Reduces the effects of enemy Movement Slow.",
    details: [
      ["+", 40, "%", "Movement Slow Resist"]
    ]
  },
  preReq: () => SPRINT_BOOTS
}
