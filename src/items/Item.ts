import { TemplateResult } from "lit";
import { Tier, TierList, Tiers } from "./Tiers";

export type Unit = '%' | '' | 'm/s' | 'm';
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
    this.passive = description.passive;
    this.active = description.active;
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

export interface Ability {
  description: string; // Markdown formatted text
  cooldown?: number; // Cooldown in seconds
  details?: AffectTuple[]
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


type FullAffectTuple = [Ordinal, number, Unit, string];
type AffectTupleWithoutOrdinal = [number, Unit, string];
type AffectTupleWithoutUnit = [Ordinal, number, string];
type AffectTupleWithoutUnitNorOrdinal = [number, string]
export type AffectTuple = FullAffectTuple | AffectTupleWithoutOrdinal | AffectTupleWithoutUnit | AffectTupleWithoutUnitNorOrdinal;
export type DeferredItemReference = () => ItemDescription;
export interface ItemDescription {
  type: "weapon" | "spirit" | "vitality"
  name: string,
  tier: number,
  stats?: StatChangeTuple[],
  buildsInto?: DeferredItemReference,
  preReq?: DeferredItemReference,
  passive?: Ability,
  active?: Ability,
}