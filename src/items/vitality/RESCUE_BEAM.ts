import { ItemDescription } from "../Item";

export const RESCUE_BEAM: ItemDescription = {
  name: 'Rescue Beam',
  id: 1804594021,
  type: 'vitality',
  tier: 3,
  stats: [
    [125, '', "Bonus Health"],
    [2, 'm/s', "Sprint Speed"],
    [9, '', "Spirit Power"]
  ],
  active: {
    description: "Heals a target allied hero and yourself for a percentage of Max Health. Once while healing, you can Pull the target towards you. Can be self-cast.",
    cooldown: 25,
    details: [
      [30, "%", "Heal Amount"],
      [2.5, "s", "Channel Duration"],
      [45, "m", "Cast Range"]
    ]
  }
}
