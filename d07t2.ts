import { readFileSync } from "node:fs";

function childRoutes(pos: number, [line, ...lines]: string[]): number {
  if (!line) return 1;
  if (line[pos] === "^") {
    const left = pos === 0 ? 0 : childRoutes(pos - 1, lines);
    const right = pos + 1 === line.length ? 0 : childRoutes(pos + 1, lines);
    return left + right;
  }
  return childRoutes(pos, lines);
}
export function solveD07T2(input: string): string {
  const lines = input.trim().split("\n");
  const headLine = lines.shift()!;
  let beam = headLine.indexOf("S");

  return childRoutes(beam, lines).toString();
}

function variantB(input: string): string {
  const lines = input.trim().split("\n");
  let splits = 0;
  const headLine = lines.shift()!;
  let beams = new Map<number, number>();
  beams.set(headLine.indexOf("S"), 1);
  let lineIdx = 0;
  for (const line of lines) {
    lineIdx += 1;
    console.log("executing line ", lineIdx);
    let newBeams: Map<number, number> = new Map();
    for (const [beam, count] of beams.entries()) {
      if (line[beam] === "^") {
        splits += 1;
        if (beam > 0) {
          newBeams.set(beam - 1, (newBeams.get(beam - 1) ?? 0) + count);
        }
        if (beam + 1 !== line.length) {
          newBeams.set(beam + 1, (newBeams.get(beam + 1) ?? 0) + count);
        }
      } else {
        newBeams.set(beam, (newBeams.get(beam) ?? 0) + count);
      }
    }
    beams = newBeams;
  }
  return [...beams.values()].reduce((a, b) => b + a, 0).toString();
}
if (import.meta.main) {
  const input = readFileSync("d07.txt", "utf-8");
  console.log("Day 07 - Task 2:", variantB(input));
}
