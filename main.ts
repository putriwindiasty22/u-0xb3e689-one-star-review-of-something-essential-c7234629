// One-Star Review of Something Essential
// Writes a single-line, deadpan one-star review (<=160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Oxygen: free, unlimited, and somehow I still run out of it on a single flight of stairs. One star.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
console.log(`Wrote ${review.length} characters to /output/entry.txt`);
