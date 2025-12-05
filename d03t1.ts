import { readFileSync } from "node:fs";

export function solveD03T1(input: string, debug = false): string {
  const lines = input.split("\n");
  let result = 0;
  for (const line of lines) {
    const batteries = [...line].map((char) => parseInt(char, 10));
    let firstBattery = Math.max(...batteries.slice(0, batteries.length - 1));
    const secondBattery = Math.max(
      ...batteries.slice(batteries.indexOf(firstBattery) + 1),
    );
    if (debug)
      console.log(
        `Line: ${line}, First Battery: ${firstBattery}, Second Battery: ${secondBattery}`,
      );
    result += 10 * firstBattery + secondBattery;
  }
  return result.toString();
}

if (import.meta.main) {
  const input = readFileSync("d03.txt", "utf-8");
  console.log("Day 03 - Task 1:", solveD03T1(input, true));
}
