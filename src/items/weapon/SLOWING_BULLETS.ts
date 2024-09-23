import { ItemDescription } from "../Item";
import { SILENCER } from "./SILENCER";

export const SLOWING_BULLETS: ItemDescription = {
  name: 'Slowing Bullets',
  type: 'weapon',
  tier: 2,
  stats: [
    [16, '%', "Weapon Damage"],
    [5, '', "Spirit Power"]
  ],
  passive: {
    description: "Your bullets apply Movement Slow.",
    details: [
      [25, "%", "Movement Slow (Conditional)"],
      [1.3, "s", "Slow Duration"]
    ]
  },
  buildsInto: () => SILENCER
}
