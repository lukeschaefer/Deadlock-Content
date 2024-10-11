import { ItemDescription } from "../Item";
import { MYSTIC_VULNERABILITY } from "./MYSTIC_VULNERABILITY";

export const ESCALATING_EXPOSURE: ItemDescription = {
  name: 'Escalating Exposure',
  id: 3005970438,
  type: 'spirit',
  tier: 4,
  stats: [
    [12, '%', "Spirit Resist"],
    [125, '', "Bonus Health"]
  ],
  passive: {
    description: "Dealing Spirit Damage applies a stacking Spirit Amp that increases your Spirit Damage to the target.",
    details: [
      ["+", 5, "%", "Spirit Amp per Stack"],
      [12, "s", "Duration"],
      [0.7, "s", "Max Frequency per Target"]
    ]
  },
  preReq: () => MYSTIC_VULNERABILITY
}
