import { readFileSync } from "node:fs";

export function solveD05T1(input: string): string {
  const [rangesStr, ingredients] = input.split("\n\n");
  const ranges = rangesStr
    .split("\n")
    .map(
      (r) =>
        r.split("-").map((e) => Number.parseInt(e, 10)) as [
          start: number,
          end: number,
        ],
    );
  return ingredients
    .split("\n")
    .map((i) => Number.parseInt(i, 10))
    .filter(
      (ingredient) =>
        ranges
          .filter((r) => r[0] <= ingredient)
          .filter((r) => r[1] >= ingredient).length > 0,
    )
    .length.toString();
}

if (import.meta.main) {
  const input = readFileSync("d05.txt", "utf-8");
  console.log("Day 05 - Task 1:", solveD05T1(input));
}
