import { ItemDescription } from "../Item";

export const HOLLOW_POINT_WARD: ItemDescription = {
  name: 'Hollow Point Ward',
  type: 'weapon',
  tier: 1,
  stats: [
    [85, '', "Spirit Shield Health"],
    [4, '', "Spirit Power"]
  ],
  passive: {
    description: "When you are above 60% health, deal additional Weapon Damage.",
    details: [
      [22, "%", "Weapon Damage (Conditional)"]
    ]
  }
}
