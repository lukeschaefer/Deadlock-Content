import { ItemDescription } from "../Item";
import { SUPERIOR_DURATION } from "./SUPERIOR_DURATION";

export const ECHO_SHARD: ItemDescription = {
  name: 'Echo Shard',
  type: 'spirit',
  tier: 4,
  stats: [
    [12, '', "Spirit Power"],
    [1, 'm/s', "Movement Speed"],
    [16, '%', "Bullet Resist"]
  ],
  active: {
    description: "Reset the cooldown of your most recently used non-ultimate ability.",
    cooldown: 21
  }
}
