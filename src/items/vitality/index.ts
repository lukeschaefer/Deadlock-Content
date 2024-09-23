import { item } from '../Item';
import { BULLET_ARMOR } from './BULLET_ARMOR';
import { BULLET_LIFESTEAL } from './BULLET_LIFESTEAL';
import { COLOSSUS } from './COLOSSUS';
import { COMBAT_BARRIER } from './COMBAT_BARRIER';
import { DEBUFF_REDUCER } from './DEBUFF_REDUCER';
import { DEBUFF_REMOVER } from './DEBUFF_REMOVER';
import { DIVINE_BARRIER } from './DIVINE_BARRIER';
import { ENCHANTERS_BARRIER } from './ENCHANTERS_BARRIER';
import { ENDURING_SPEED } from './ENDURING_SPEED';
import { ENDURING_SPIRIT } from './ENDURING_SPIRIT';
import { EXTRA_HEALTH } from './EXTRA_HEALTH';
import { EXTRA_REGEN } from './EXTRA_REGEN';
import { EXTRA_STAMINA } from './EXTRA_STAMINA';
import { FORTITUDE } from './FORTITUDE';
import { HEALBANE } from './HEALBANE';
import { HEALING_BOOSTER } from './HEALING_BOOSTER';
import { HEALING_RITE } from './HEALING_RITE';
import { HEALTH_NOVA } from './HEALTH_NOVA';
import { IMPROVED_BULLET_ARMOR } from './IMPROVED_BULLET_ARMOR';
import { IMPROVED_SPIRIT_ARMOR } from './IMPROVED_SPIRIT_ARMOR';
import { INHIBITOR } from './INHIBITOR';
import { LEECH } from './LEECH';
import { LIFESTRIKE } from './LIFESTRIKE';
import { MAJESTIC_LEAP } from './MAJESTIC_LEAP';
import { MELEE_LIFESTEAL } from './MELEE_LIFESTEAL';
import { METAL_SKIN } from './METAL_SKIN';
import { PHANTOM_STRIKE } from './PHANTOM_STRIKE';
import { REACTIVE_BARRIER } from './REACTIVE_BARRIER';
import { RESCUE_BEAM } from './RESCUE_BEAM';
import { RESTORATIVE_LOCKET } from './RESTORATIVE_LOCKET';
import { RETURN_FIRE } from './RETURN_FIRE';
import { SHADOW_WEAVE } from './SHADOW_WEAVE';
import { SOUL_REBIRTH } from './SOUL_REBIRTH';
import { SPIRIT_ARMOR } from './SPIRIT_ARMOR';
import { SPIRIT_LIFESTEAL } from './SPIRIT_LIFESTEAL';
import { SPRINT_BOOTS } from './SPRINT_BOOTS';
import { SUPERIOR_STAMINA } from './SUPERIOR_STAMINA';
import { UNSTOPPABLE } from './UNSTOPPABLE';
import { VEIL_WALKER } from './VEIL_WALKER';

export const ALL_VITALITY_ITEMS = [
  BULLET_ARMOR,
  BULLET_LIFESTEAL,
  COLOSSUS,
  COMBAT_BARRIER,
  DEBUFF_REDUCER,
  DEBUFF_REMOVER,
  DIVINE_BARRIER,
  ENCHANTERS_BARRIER,
  ENDURING_SPEED,
  ENDURING_SPIRIT,
  EXTRA_HEALTH,
  EXTRA_REGEN,
  EXTRA_STAMINA,
  FORTITUDE,
  HEALBANE,
  HEALING_BOOSTER,
  HEALING_RITE,
  HEALTH_NOVA,
  IMPROVED_BULLET_ARMOR,
  IMPROVED_SPIRIT_ARMOR,
  INHIBITOR,
  LEECH,
  LIFESTRIKE,
  MAJESTIC_LEAP,
  MELEE_LIFESTEAL,
  METAL_SKIN,
  PHANTOM_STRIKE,
  REACTIVE_BARRIER,
  RESCUE_BEAM,
  RESTORATIVE_LOCKET,
  RETURN_FIRE,
  SHADOW_WEAVE,
  SOUL_REBIRTH,
  SPIRIT_ARMOR,
  SPIRIT_LIFESTEAL,
  SPRINT_BOOTS,
  SUPERIOR_STAMINA,
  UNSTOPPABLE,
  VEIL_WALKER,
].map((description) => item(description));
