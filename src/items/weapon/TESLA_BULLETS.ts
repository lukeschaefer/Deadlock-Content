import { ItemDescription } from "../Item";

export const TESLA_BULLETS: ItemDescription = {
  name: 'Tesla Bullets',
  type: 'weapon',
  tier: 3,
  stats: [
    [14, '%', "Fire Rate"]
  ],
  passive: {
    description: "Your bullets have a chance to shock your target. The shock will jump to a nearby enemy.",
    details: [
      [30, "Shock Damage"],
      [60, "Damage on Jump"],
      [25, "%", "Proc Chance"],
      [8, "m", "Jump Radius"],
      [2, "Max Jumps"]
    ]
  }
}
