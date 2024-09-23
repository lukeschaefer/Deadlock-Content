import { ItemDescription } from "../Item";
import { SUPPRESSOR } from "./SUPPRESSOR";

export const MYSTIC_SLOW: ItemDescription = {
  name: 'Mystic Slow',
  type: 'spirit',
  tier: 3,
  stats: [
    [100, '', "Bonus Health"],
    [3, '', "Health Regen"],
    [6, '', "Spirit Power"]
  ],
  passive: {
    description: "If a target takes Spirit damage, they have their Movement Speed and Fire Rate reduced.",
    details: [
      [30, "%", "Movement Slow"],
      [40, "%", "Fire Rate Slow"],
      [2, "s", "Duration"]
    ]
  },
  preReq: () => SUPPRESSOR
}
