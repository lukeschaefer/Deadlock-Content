import { ItemDescription } from "../Item";

export const RESTORATIVE_LOCKET: ItemDescription = {
  name: 'Restorative Locket',
  id: 2059712766,
  type: 'vitality',
  tier: 2,
  stats: [
    [10, '%', "Spirit Resist"],
    [5, '', "Spirit Power"],
    [1, 'm/s', "Sprint Speed"]
  ],
  passive: {
    description: "When an enemy uses an ability within 50m range from you, store one Restoration Stack."
  },
  active: {
    description: "Consume all stacks to heal target ally and resotre a stamina point. Can be self-cast.",
    cooldown: 28,
    details: [
      ["+", 35, "Heal per Stack"],
      [15, "Max Stacks"]
    ]
  }
}
