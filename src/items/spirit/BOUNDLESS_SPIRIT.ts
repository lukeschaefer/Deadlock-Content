import { ItemDescription } from "../Item";
import { AMMO_SCAVENGER } from "./AMMO_SCAVENGER";


export const BOUNDLESS_SPIRIT : ItemDescription = {
  type: "weapon",
  name: 'Boundless Spirit', 
  tier: 2,
  stats: [
    [60, 'Spirit Power'],
    [20, '%', 'Bullet Damage']
  ],  
  passive: {
    description: "Any time you secure or deny a Soul you get ammo back and gain stacking Spirit Power.",
    details: [
      [15, '%', "Ammo"],
      [60, "Bonus Health"]
    ]
  },
  preReq: () => AMMO_SCAVENGER
};
