
export interface Tier {
  level: number;
  price: number;
}



export const Tiers = {
  TIER_1 : {level: 1, price: 500} as Tier,
  TIER_2 : {level: 2, price: 1250} as Tier,
  TIER_3 : {level: 3, price: 3000} as Tier,
  TIER_4 : {level: 4, price: 6200} as Tier,
} as const;

export const TierList = [
  Tiers.TIER_1, Tiers.TIER_2, Tiers.TIER_3, Tiers.TIER_4
];