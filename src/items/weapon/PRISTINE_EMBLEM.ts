import { ItemDescription } from "../Item";
import { HIGH_VELOCITY_MAG } from "./HIGH_VELOCITY_MAG";

export const PRISTINE_EMBLEM: ItemDescription = {
  name: 'Pristine Emblem',
  type: 'weapon',
  tier: 3,
  stats: [
    [35, '%', "Bullet Velocity"],
    [25, '%', "Weapon Damage"],
    [12, '', "Spirit Power"],
    [12, '%', "Spirit Resist"]
  ],
  passive: {
    description: "Your attacks have additional Weapon Damage against enemies above 50% health.",
    details: [
      [25, "%", "Weapon Damage (Conditional)"]
    ]
  },
  preReq: () => HIGH_VELOCITY_MAG
}
