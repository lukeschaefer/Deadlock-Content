import { ItemDescription } from "../Item";

export const MAJESTIC_LEAP: ItemDescription = {
  name: 'Majestic Leap',
  type: 'vitality',
  tier: 3,
  stats: [
    [10, '', "Spirit Power"],
    [125, '', "Bonus Health"]
  ],
  active: {
    description: "Launch yourself high into the air. While in the air, you can use the active again to drop down faster. Cannot be used for 5s if attacked by enemy Hero.",
    cooldown: 24
  }
}
