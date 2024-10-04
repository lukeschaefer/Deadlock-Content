import { ItemDescription } from "../Item";

export const QUICKSILVER_RELOAD: ItemDescription = {
  name: 'Quicksilver Reload',
  id: 84321454,
  type: 'spirit',
  tier: 2,
  stats: [
    [8, '', "Spirit Power"]
  ],
  passive: {
    description: "Imbue an ability with bonus Spirit Damage on the first hit. When the ability is used, your weapon is reloaded and has a Fire Rate bonus for that clip.",
    details: [
      [65, "Spirit Damage"],
      [15, "%", "Fire Rate Bonus"],
      [12, "s", "Max Frequency"]
    ]
  }
}
