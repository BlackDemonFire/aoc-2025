import { readFileSync } from "node:fs";

export function solveD06T1(input: string): string {
  const lines = input.trim().split("\n");
  const operators = lines.pop()!.trim().split(/ +/);
  const numLines = lines.map((l) =>
    l
      .trim()
      .split(/ +/)
      .map((e) => Number.parseInt(e, 10)),
  );

  return operators
    .map((op, idx) =>
      op === "+"
        ? numLines.reduce<number>((prev, cur) => prev + cur[idx], 0)
        : numLines.reduce<number>((prev, cur) => prev * cur[idx], 1),
    )
    .reduce<number>((prev, cur) => prev + cur, 0)
    .toString();
}

if (import.meta.main) {
  const input = readFileSync("d06.txt", "utf-8");
  console.log("Day 06 - Task 1:", solveD06T1(input));
}
