import { ItemDescription } from "../Item";
import { BOUNDLESS_SPIRIT } from "./BOUNDLESS_SPIRIT";

export const AMMO_SCAVENGER : ItemDescription = {
  name: 'Ammo Scavenger',
  type: 'weapon',
  tier: 1,
  stats: [
    [15, '%', "Ammo"],
    [60, '', "Bonus Health"]
  ],  
  passive: {
    description: "Any time you secure or deny a Soul you get ammo back and gain stacking Spirit Power.",
    details: [
      ["+", 2, "Ammo Per Soul"],
      [12, "Max Stacks"]
    ]
  
  },
  buildsInto: () => BOUNDLESS_SPIRIT
}

