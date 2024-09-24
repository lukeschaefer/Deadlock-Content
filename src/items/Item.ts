import { Tier, TierList } from "./Tiers";

export type Unit = '%' | '' | 'm/s' | 'm' | 's' | '%/sec';
type ShorthandTier = 1 | 2 | 3 | 4;

export class Item {
  name: string;
  type: string;
  tier: Tier;
  passive?: Ability;
  active?: Ability;
  stats: StatChange[] = [];

  constructor(public description: ItemDescription) {
    this.name = description.name;
    this.type = description.type;
    this.tier = TierList[description.tier - 1];
    this.passive = convertAbility(description.passive);
    this.active = convertAbility(description.active);
    this.stats = (description.stats ?? []).map(stat => convertStatTupleToStruct(stat));
  }

  get preReq() : Item | undefined{
    if(this.description.preReq) return item(this.description.preReq());
  }

  get buildsInto() : Item | undefined {
    if(this.description.buildsInto) return item(this.description.buildsInto());
  }
  
  get price() : number{
    return this.tier.price + (this.preReq?.price ?? 0);
  }
}

export function item(description: ItemDescription) {
  return new Item(description)
}

export interface AbilityDescription {
  description: string; // Markdown formatted text
  cooldown?: number; // Cooldown in seconds
  details?: AffectTuple[]
}


export interface Ability {
  description: string; // Markdown formatted text
  cooldown?: number; // Cooldown in seconds
  details?: Affect[]
}


export type Ordinal = "+" | "-" | "";

// Used to indicate a detrimental stat.
export const NEGATIVE = Symbol();

type FullStatChangeTuple = [number, Unit, string];
type NegativeStatChangeTuple = [number, Unit, string, typeof NEGATIVE];
type StatChangeTupleWithoutUnit = [number, string];
type StatChangeTupleWithoutUnitButNegative = [number, string, typeof NEGATIVE];
export type StatChangeTuple = FullStatChangeTuple | NegativeStatChangeTuple | StatChangeTupleWithoutUnit | StatChangeTupleWithoutUnitButNegative;
export type StatChange = {
  unit: Unit,
  amount: Number,
  isBad: boolean,
  stat: string
}

export function convertStatTupleToStruct(tuple: StatChangeTuple): StatChange {
  let amount: number = tuple[0];
  let unit: Unit = '';
  let stat: string = '';
  let isBad = false;

  if (tuple.length === 2) {
    // [number, string]
    stat = tuple[1];
  } else if (tuple.length === 3) {
    if (tuple[2] === NEGATIVE) {
      // [number, string, NEGATIVE]
      stat = tuple[1] as string;
      isBad = true;
    } else {
      // [number, Unit, string]
      unit = tuple[1] as Unit;
      stat = tuple[2];
    }
  } else {
    // [number, Unit, string, NEGATIVE]
    unit = tuple[1] as Unit;
    stat = tuple[2];
    isBad = true;
  }
  return {
    amount,
    unit,
    isBad,
    stat,
  };
}

export interface Affect {
  amount: number;
  unit: Unit;
  ordinal: Ordinal;
  stat: string;
}

type FullAffectTuple = [Ordinal, number, Unit, string];
type AffectTupleWithoutOrdinal = [number, Unit, string];
type AffectTupleWithoutUnit = [Ordinal, number, string];
type AffectTupleWithoutUnitNorOrdinal = [number, string]
export type AffectTuple = FullAffectTuple | AffectTupleWithoutOrdinal | AffectTupleWithoutUnit | AffectTupleWithoutUnitNorOrdinal;
export type DeferredItemReference = () => ItemDescription;
export interface ItemDescription {
  type: "weapon" | "spirit" | "vitality"
  name: string,
  tier: ShorthandTier,
  stats?: StatChangeTuple[],
  buildsInto?: DeferredItemReference,
  preReq?: DeferredItemReference,
  passive?: AbilityDescription,
  active?: AbilityDescription,
}

export function converAbilityTupleToStruct(tuple: AffectTuple): Affect {
  let amount: number = 0;
  let unit: Unit = '';
  let stat: string = '';
  let ordinal: Ordinal = '';

  if(typeof tuple[0] == "string") {
    if(tuple.length === 3) {
      // [Ordinal, number, string]
      ordinal = tuple[0] as Ordinal;
      amount = tuple[1] as number;
      stat = tuple[2] as string;
    } else {
      // [Ordinal, number, Unit, string]
      ordinal = tuple[0] as Ordinal;
      amount = tuple[1] as number;
      unit = tuple[2] as Unit;
      stat = tuple[3] as string;
    }
  } else {
    if(tuple.length === 2) {
      // [number, string]
      amount = tuple[0] as number;
      stat = tuple[1] as string;
    } else {
      // [number, Unit, string]
      amount = tuple[0] as number;
      unit = tuple[1] as Unit;
      stat = tuple[2] as string;
    }
  }
  return {
    amount,
    unit,
    ordinal,
    stat,
  };
}

export function convertAbility(description?: AbilityDescription): Ability | undefined {
  if(!description) return undefined;
  return {
    description: description.description,
    cooldown: description.cooldown,
    details: description.details?.map(affect => converAbilityTupleToStruct(affect))
  }
}