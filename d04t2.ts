import { readFileSync } from "node:fs";

export function solveD04T2(input: string): string {
  let lines = input.split("\n");
  let result = 0;
  let curResult = 0;
  do {
    curResult = result;
    let positionsToClear: [number, number][] = [];
    lines.forEach((line, row) => {
      line.split("").forEach((char, col) => {
        if (char === ".") return;
        const deltas = [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1],
        ] satisfies [yOffset: number, xOffset: number][];
        const neighbors = deltas
          .filter(
            ([y, x]) =>
              (col > 0 ? true : x !== -1) &&
              (col < line.length - 1 ? true : x !== 1) &&
              (row > 0 ? true : y !== -1) &&
              (row < lines.length - 1 ? true : y !== 1),
          )
          .map(([yOffset, xOffset]) => {
            const neighborChar = lines[row + yOffset][col + xOffset];
            return neighborChar === "@" ? 1 : 0;
          })
          .reduce<number>((acc, val) => acc + val, 0);
        if (neighbors < 4) {
          positionsToClear.push([row, col]);
          result += 1;
        }
      });
    });
    positionsToClear.forEach(([row, col]) => {
      lines = lines.map((line, rIdx) =>
        rIdx === row
          ? line
              .split("")
              .map((char, cIdx) => (cIdx === col ? "." : char))
              .join("")
          : line,
      );
    });
  } while (curResult !== result);

  return result.toString();
}

if (import.meta.main) {
  const input = readFileSync("d04.txt", "utf-8");
  console.log("Day 04 - Task 2:", solveD04T2(input));
}
