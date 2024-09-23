import { ItemDescription } from "../Item";

export const HEADSHOT_BOOSTER: ItemDescription = {
  name: 'Headshot Booster',
  type: 'weapon',
  tier: 1,
  stats: [
    [5, '%', "Fire Rate"],
    [40, '', "Bullet Shield Health"]
  ],
  passive: {
    description: "Deal bonus Weapon Damage with headshots.",
    details: [
      [40, "Head Shot Bonus Damage"]
    ]
  }
}