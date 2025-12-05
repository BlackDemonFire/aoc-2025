import { readFileSync } from "node:fs";

export function solveD03T2(input: string, debug = false): string {
  const lines = input.split("\n");
  let result = 0;
  for (const line of lines) {
    const batteries = ["-1", ...line].map((char) => parseInt(char, 10));
    let lastBattery = -1;
    let batteriesToInspect = [...batteries];

    let val = 0;
    for (let batIdx = 11; batIdx >= 0; batIdx--) {
      let bat = Math.max(
        ...batteriesToInspect.slice(0, batteriesToInspect.length - batIdx),
      );
      lastBattery = bat;
      val *= 10;
      val += bat;
      batteriesToInspect = batteriesToInspect.slice(
        batteriesToInspect.indexOf(bat) + 1,
      );
    }
    if (debug) console.log(`Line: ${line}, Batteries: ${val}`);
    result += val;
  }
  return result.toString();
}

if (import.meta.main) {
  const input = readFileSync("d03.txt", "utf-8");
  console.log("Day 03 - Task 2:", solveD03T2(input, true));
}
