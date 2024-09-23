import { ItemDescription } from "../Item";

export const FLEETFOOT: ItemDescription = {
  name: 'Fleetfoot',
  type: 'weapon',
  tier: 2,
  stats: [
    [75, '', "Bonus Health"],
    [25, '%', "Slide Distance"]
  ],
  passive: {
    description: "Removes the Movement Speed penalty while shooting."
  },
  active: {
    description: "Gain bonus Movement Speed and Ammo.",
    cooldown: 22,
    details: [
      [4, "m/s", "Movement Speed"],
      [30, "%", "Temporary Ammo"],
      [4, "s", "Duration"]
    ]
  }
}
