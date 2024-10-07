import { ALL_ITEMS, ALL_CHARACTERS} from '../dist/esm';

try {
  const all : string[] = [];
  ALL_ITEMS.forEach((item) => all.push(item.name));
  ALL_CHARACTERS.forEach((char) => all.push(char.name));
  console.log("✅ ESM SUCCESS");
} catch(e) {
  console.error("❌ ESM ERROR");
  console.error(e);
}
