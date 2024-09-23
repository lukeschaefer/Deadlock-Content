import { ItemDescription } from "../Item";

export const HUNTERS_AURA: ItemDescription = {
  name: "Hunter's Aura",
  type: 'weapon',
  tier: 3,
  stats: [
    [150, '', "Bonus Health"]
  ],
  passive: {
    description: "Reduces nearby enemies' Bullet Resist and Fire Rate. If there is only one enemy hero nearby, this effect is tripled.",
    details: [
      ["-", 10, "%", "Bullet Resist (Conditional)"],
      ["-", 10, "%", "Fire Rate (Conditional)"],
      [15, "m", "Radius"]
    ]
  }
}
