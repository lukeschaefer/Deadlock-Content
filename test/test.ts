import {Item} from '../src/items/Item.ts';
import {ALL_SPIRIT_ITEMS} from '../src/items/spirit/index.ts';
import {ALL_WEAPON_ITEMS} from '../src/items/weapon/index.ts';
import {ALL_VITALITY_ITEMS} from '../src/items/vitality/index.ts';

ALL_WEAPON_ITEMS.forEach((item: Item) => {
    console.log(item.name);
});