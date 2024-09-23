import { ItemDescription } from "../Item";
import { POINT_BLANK } from "./POINT_BLANK";

export const CLOSE_QUARTERS: ItemDescription = {
  name: 'Close Quarters',
  type: 'weapon',
  tier: 1,
  stats: [
    [85, '', "Bullet Shield Health"]
  ],
  passive: {
    description: "Deal additional Weapon Damage when in close range to your target.",
    details: [
      [25, "%", "Weapon Damage (Conditional)"],
      [15, "m", "Close Range"]
    ]
  },
  buildsInto: () => POINT_BLANK
}
