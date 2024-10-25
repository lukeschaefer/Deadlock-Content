import { ItemDescription } from "../Item";

export const AMMO_SCAVENGER : ItemDescription = {
  name: 'Ammo Scavenger',
  id: 1248737459,
  type: 'spirit',
  tier: 1,
  stats: [
    [10, '%', "Ammo"],
    [40, '', "Bonus Health"]
  ],  
  passive: {
    description: "Any time you secure or deny a Soul you get ammo back and gain stacking Spirit Power.",
    details: [
      ["+", 2, "Ammo Per Soul"],
      ["+", 1, "Spirit Power Per Soul"],
      [20, "Max Stacks"],
      [35, "s", "Spirit Power Duration"],
    ]
  }
}

