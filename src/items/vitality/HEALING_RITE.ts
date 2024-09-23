import { ItemDescription } from "../Item";
import { HEALTH_NOVA } from "./HEALTH_NOVA";

export const HEALING_RITE: ItemDescription = {
  name: 'Healing Rite',
  type: 'vitality',
  tier: 1,
  stats: [
    [45, '', "Bonus Health"],
    [3, '', "Spirit Power"]
  ],
  active: {
    description: "Grant Regen and Sprint Speed to the target. Gets dispelled if you take damage from enemy players or objectives. Can be self-cast.",
    cooldown: 60,
    details: [
      [370, "Total Health Regen"],
      ["+", 2, "m/s", "Sprint Speed"],
      [17, "s", "Regen Duration"],
      [30, "m", "Cast Range"]
    ]
  },
  buildsInto: () => HEALTH_NOVA
}
