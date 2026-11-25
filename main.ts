import { mkdirSync, writeFileSync } from "node:fs";

const joke = "The office fridge says label your food. Someone labeled theirs 'evidence.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
