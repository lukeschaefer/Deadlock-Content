import { ItemDescription } from "../Item";

export const ALCHEMICAL_FIRE: ItemDescription = {
  name: 'Alchemical Fire',
  id: 1932939246,
  type: 'weapon',
  tier: 3,
  stats: [
    [225, '', "Bullet Shield Health"],
    [14, '%', "Weapon Damage"],
    [7, '', "Spirit Power"]
  ],
  active: {
    description: "Throw a flash that explodes on contact, creating an area that does increasing Spirit Damage per second and causes enemies to receive additional Weapon Damage from your team. Deals 40% less DPS vs non-heroes.",
    cooldown: 26,
    details: [
      [46, "DPS"],
      [50, "%", "Weapon Damage (Conditional)"],
      [97, "Max DPS"],
      [10, "m", "Radius"],
      [5, "s", "Duration"]
    ]
  }
}
