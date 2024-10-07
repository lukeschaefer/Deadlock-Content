# deadlock-content

Provides an accessible list of deadlock content in a structured format for building sites/bots/etc.  
Powers [deadlock.zip](https://deadlock.zip) as well as the reddit [DeadlockBot](https://github.com/lukeschaefer/DeadlockBot).

Currently has items and characters, but may add more content in the future.

## How to use

First install, via npm:

`npm i deadlock-content`

Then in your code, import content like so:

```typescript
import {ALL_ITEMS, PLAYABLE_CHARACTERS} from 'deadlock-content';
```



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
