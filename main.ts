// A washing machine gives up on washing and rebrands itself as storage.
// Output: one exact line, written to /output/entry.txt and printed.
// The file must end without a trailing newline so the checker
// sees exactly the single entry line and nothing else.

import * as fs from "node:fs";
import * as path from "node:path";

const message =
  "WASHER ERROR: Drum stopped spinning. I have decided to become a very expensive laundry basket.";

function main(): void {
  const outDir = "/output";
  const outFile = path.join(outDir, "entry.txt");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, message, "utf8");
  process.stdout.write(message + "\n");
}

main();
