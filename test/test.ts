import {Item} from '../src/items/Item.ts';
import {AMMO_SCAVENGER, BOUNDLESS_SPIRIT} from '../src/items/spirit/index';

function logItem(item: Item) {
    console.log(item.tier.price);
}
logItem(AMMO_SCAVENGER);
logItem(BOUNDLESS_SPIRIT);