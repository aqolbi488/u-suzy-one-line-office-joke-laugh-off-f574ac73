import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I asked HR for work-life balance; they gave me a second laptop so work follows me home in stereo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
