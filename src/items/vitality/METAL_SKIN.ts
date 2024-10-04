import { ItemDescription } from "../Item";

export const METAL_SKIN: ItemDescription = {
  name: 'Metal Skin',
  id: 1378931225,
  type: 'vitality',
  tier: 3,
  stats: [
    [125, '', "Bonus Health"],
    [8, '', "Spirit Power"],
    [8, '%', "Fire Rate"]
  ],
  active: {
    description: "Become immune to bullets and melee attacks.",
    cooldown: 22,
    details: [
      [3.5, "s", "Duration"]
    ]
  }
}
