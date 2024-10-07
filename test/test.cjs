const {ALL_ITEMS, ALL_CHARACTERS} = require('../dist/index.js');

try {
  const all = [];
  ALL_ITEMS.forEach((item) => all.push(item.name));
  ALL_CHARACTERS.forEach((char) => all.push(char.name));
  console.log("✅ COMMONJS SUCCESS");
} catch(e) {
  console.error("❌ COMMONJS ERROR");
  console.error(e);
}
