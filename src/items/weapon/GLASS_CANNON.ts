import { ItemDescription } from "../Item";

export const GLASS_CANNON: ItemDescription = {
  name: 'Glass Cannon',
  id: 365620721,
  type: 'weapon',
  tier: 4,
  stats: [
    [70, '%', "Weapon Damage"],
    [10, '%', "Fire Rate"],
    [1, 'm/s', "Movement Speed"],
    [-15, '%', "Max Health"]
  ],
  passive: {
    description: "Each hero kill grants permanent Weapon Damage (up to a max of 5 times). Death results in loss of 1 stack.",
    details: [
      [10, "%", "Weapon Damage per Kill (Conditional)"]
    ]
  }
}
