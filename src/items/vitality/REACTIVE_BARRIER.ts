import { ItemDescription } from "../Item";

export const REACTIVE_BARRIER: ItemDescription = {
  name: 'Reactive Barrier',
  id: 1644605047,
  type: 'vitality',
  tier: 2,
  stats: [
    [15, '%', "Ammo"],
    [75, '', "Bonus Health"],
    [2, '', "Health Regen"]
  ],
  passive: {
    description: "Automatically deploy temporary Bullet and Spirit Shields when you are movement locked, Stunned, Chained, Immobilized, or Slept.",
    cooldown: 30,
    details: [
      [400, "Bullet Shield Health (Conditional)"],
      [200, "Spirit Shield Health (Conditional)"],
      [9, "s", "Duration"]
    ]
  }
}
