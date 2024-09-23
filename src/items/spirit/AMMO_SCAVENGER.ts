import { ItemDescription } from "../Item";

export const AMMO_SCAVENGER : ItemDescription = {
  name: 'Ammo Scavenger',
  type: 'spirit',
  tier: 1,
  stats: [
    [15, '%', "Ammo"],
    [60, '', "Bonus Health"]
  ],  
  passive: {
    description: "Any time you secure or deny a Soul you get ammo back and gain stacking Spirit Power.",
    details: [
      ["+", 2, "Ammo Per Soul"],
      ["+", 2, "Spirit Power Per Soul"],
      [12, "Max Stacks"],
      [35, "s", "Spirit Power Duration"],
    ]
  }
}

