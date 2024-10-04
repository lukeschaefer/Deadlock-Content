import { ItemDescription } from "../Item";

export const KINETIC_DASH: ItemDescription = {
  name: 'Kinetic Dash',
  id: 3977876567,
  type: 'weapon',
  tier: 2,
  stats: [
    [100, '', "Bonus Health"],
    [1.5, '', "Health Regen"]
  ],
  passive: {
    description: "Your next Dash-Jump does not cost extra stamina and you gain Fire Rate and bonus Ammo until your next reload. Lasts up to 8s.",
    cooldown: 10,
    details: [
      [20, "%", "Fire Rate"],
      [5, "Temporary Ammo"],
      [7, "s", "Duration"]
    ]
  }
}
