import { readFileSync } from "node:fs";

function isInvalid(id: string): boolean {
  if (id.length % 2) return false;
  const mid = id.length / 2;
  if (id.slice(0, mid) === id.slice(mid)) return true;
  return false;
}

export function solveD03T2(input: string): string {
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
    console.log(`Line: ${line}, Batteries: ${val}`);
    result += val;
  }
  return result.toString();
}

// TODO: if file is run directly
if (true) {
  const input = readFileSync("d03.txt", "utf-8");
  console.log("Day 03 - Task 2:", solveD03T2(input.toString()));
}
