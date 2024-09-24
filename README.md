# deadlock-content

Provides an accessible list of deadlock content in a structured format for building sites/bots/etc.  
Powers [deadlock.zip](https://deadlock.zip) as well as the reddit [DeadlockBot](https://github.com/lukeschaefer/DeadlockBot).

Currently just has items, but may add abilities/characters as well.

## How to use

First install, via npm:

`npm i deadlock-content`

Then in your code, import content like so:

`import {ALL_ITEMS} from 'deadlock-content';`

This is an array that can be iterated over. There's also `ALL_SPIRIT_ITEMS`, `ALL_VITALITY_ITEMS`, and `ALL_WEAPON_ITEMS`. I should make it so you can import any individual item but I didn't. Items have this format:

```typescript
class Item {
  name: string; // Renderable item name
  type: "weapon" | "spirit" | "vitality";
  tier: {
    level: number,
    price: number
  };
  price: number; // Provides price including preReq
  stats: StatChange[];
  passive?: Ability;
  active?: Ability;
}

interface Ability {
  description: string; // Markdown formatted text
  cooldown?: number; // Cooldown in seconds
  details?: Affect[]
}
```

## Want to help or make changes?

All the item descriptions are in the files named after the items. For example [BURST_FIRE.ts](https://github.com/lukeschaefer/Deadlock-Content/blob/main/src/items/weapon/BURST_FIRE.ts). Should be relatively straightforward to edit.
