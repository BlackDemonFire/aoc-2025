import { readFileSync } from "node:fs";

function isInvalid(id: string): boolean {
  if (id.length % 2) return false;
  const mid = id.length / 2;
  if (id.slice(0, mid) === id.slice(mid)) return true;
  return false;
}

export function solveD03T1(input: string): string {
  const lines = input.split("\n");
  let result = 0;
  for (const line of lines) {
    const batteries = [...line].map((char) => parseInt(char, 10));
    let firstBattery = Math.max(...batteries.slice(0, batteries.length - 1));
    const secondBattery = Math.max(
      ...batteries.slice(batteries.indexOf(firstBattery) + 1),
    );
    console.log(
      `Line: ${line}, First Battery: ${firstBattery}, Second Battery: ${secondBattery}`,
    );
    result += 10 * firstBattery + secondBattery;
  }
  return result.toString();
}

// TODO: if file is run directly
if (true) {
  const input = readFileSync("d03.txt", "utf-8");
  console.log("Day 03 - Task 1:", solveD03T1(input.toString()));
}
