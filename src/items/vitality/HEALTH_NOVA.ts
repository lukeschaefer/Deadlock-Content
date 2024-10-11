import { ItemDescription } from "../Item";
import { HEALING_RITE } from "./HEALING_RITE";

export const HEALTH_NOVA: ItemDescription = {
  name: 'Health Nova',
  id: 2956256701,
  type: 'vitality',
  tier: 2,
  stats: [
    [12, '%', "Weapon Damage"],
    [100, '', "Bonus Health"],
    [6, '', "Spirit Power"]
  ],
  active: {
    description: "Heal yourself and nearby allies. Heals an additional 20% per ally.",
    cooldown: 60,
    details: [
      [260, "Total HP Regen"],
      [2, "s", "Regen Duration"],
      [15, "m", "Radius"]
    ]
  },
  preReq: () => HEALING_RITE
}
