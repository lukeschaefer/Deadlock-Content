import { ItemDescription } from "../Item";
import { HEADHUNTER } from "./HEADHUNTER";

export const HEADSHOT_BOOSTER: ItemDescription = {
  name: 'Headshot Booster',
  id: 2010028405,
  type: 'weapon',
  tier: 1,
  stats: [
    [4, '%', "Fire Rate"],
    [40, '', "Bullet Shield Health"]
  ],
  passive: {
    description: "Deal bonus Weapon Damage with headshots.",
    details: [
      [40, "Head Shot Bonus Damage"]
    ]
  },
  buildsInto: () => HEADHUNTER
}