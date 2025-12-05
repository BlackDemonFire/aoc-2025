import { readFileSync } from "node:fs";

export function solveD01T1(input: string, debug = false): string {
  const lines = input
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  let dial = 50;
  let result = 0;
  for (const line of lines) {
    let move: number;
    if (line.startsWith("L")) {
      move = -parseInt(line.slice(1), 10);
    } else {
      move = parseInt(line.slice(1), 10);
    }
    dial += move;
    while (dial < 0) {
      dial += 100;
    }
    while (dial >= 100) {
      dial -= 100;
    }
    if (dial === 0) {
      result += 1;
    }
    if (debug)
      console.log(
        `Line: ${line}, Move: ${move}, Dial: ${dial}, Result: ${result}`,
      );
  }
  return result.toString();
}

if (import.meta.main) {
  const input = readFileSync("d01.txt");
  console.log("Day 01 - Task 1:", solveD01T1(input.toString(), true));
}
