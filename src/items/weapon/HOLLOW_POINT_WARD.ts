import { ItemDescription } from "../Item";

export const HOLLOW_POINT_WARD: ItemDescription = {
  name: 'Hollow Point Ward',
  id: 2678489038,
  type: 'weapon',
  tier: 1,
  stats: [
    [95, '', "Spirit Shield Health"],
    [4, '', "Spirit Power"]
  ],
  passive: {
    description: "When you are above 60% health, deal additional Weapon Damage.",
    details: [
      [22, "%", "Weapon Damage (Conditional)"]
    ]
  }
}
