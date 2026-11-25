import * as fs from "node:fs";
import * as path from "node:path";

// The funniest honest appliance error: a washing machine reports its drum
// stopped spinning, in its own flat, put-upon voice. No newline at the end
// of the entry file, so the gate counts exactly the line itself.
const entry =
  "WASHER ERROR: Drum stopped spinning. I have decided to become a very expensive laundry basket.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), entry, "utf8");
console.log(entry);
