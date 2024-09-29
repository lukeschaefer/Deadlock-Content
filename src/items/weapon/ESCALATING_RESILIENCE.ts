import { ItemDescription } from "../Item";

export const ESCALATING_RESILIENCE: ItemDescription = {
  name: 'Escalating Resilience',
  type: 'weapon',
  tier: 3,
  stats: [
    [12, '%', "Fire Rate"],
    [14, '%', "Weapon Damage"]
  ],
  passive: {
    description: "Grants Bullet Resist when your bullets hit an enemy hero. Each shot can only grant one stack.",
    details: [
      [40, "%", "Max Bullet Resist"],
      [2, "%", "Bullet Resist per Stack"],
      [20, "s", "Stack Duration"]
    ]
  }
}
