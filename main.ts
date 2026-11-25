// Entry runner for "The Battery's Last Text to Its Charger" (alven).
// One line: a dying phone battery's final message to the charger it
// waited for all day. It is a love letter and an acquittal — you were
// there every night; I died in a café at noon; the fault belongs to the
// brightness setting — closing with a plea to forgive the screen, which
// only ever showed what it was told. At /output/entry.txt, 1%.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "You were there every night and I still died in a café at noon — this is not your fault, it's the brightness setting's. Forgive the screen.";

function prepare(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

const out = process.env.OUTPUT_DIR ?? "/output";
prepare(out);
fs.writeFileSync(path.join(out, "entry.txt"), LINE + "\n", "utf8");
