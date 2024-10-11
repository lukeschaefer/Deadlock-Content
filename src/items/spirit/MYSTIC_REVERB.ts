import { ItemDescription } from "../Item";

export const MYSTIC_REVERB: ItemDescription = {
  name: 'Mystic Reverb',
  id: 869090587,
  type: 'spirit',
  tier: 4,
  stats: [
    [15, '%', "Spirit Lifesteal"],
    [15, '%', "Spirit Resist"],
    [15, '%', "Ability Range"]
  ],
  passive: {
    description: "Imbue an ability to apply slow in a radius around the target and deal an additional percentage of the damage dealt to enemies around the target after a short delay.",
    cooldown: 6,
    details: [
      [40, "%", "Damage (Conditional)"],
      [40, "%", "Movement Slow (Conditional)"],
      [16, "m", "Radius"],
      [3, "s", "Delay Duration"]
    ]
  }
}
