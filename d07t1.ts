import { readFileSync } from "node:fs";

export function solveD07T1(input: string): string {
  const lines = input.trim().split("\n");
  let splits = 0;
  const headLine = lines.shift()!;
  let beams = [headLine.indexOf("S")];
  for (const line of lines) {
    let newBeams: number[] = [];
    for (const beam of beams) {
      if (line[beam] === "^") {
        splits += 1;
        if (beam > 0 && !newBeams.includes(beam - 1)) {
          newBeams.push(beam - 1);
        }
        if (beam + 1 !== line.length) {
          newBeams.push(beam + 1);
        }
      } else if (!newBeams.includes(beam)) {
        newBeams.push(beam);
      }
    }
    beams = newBeams;
  }
  return splits.toString();
}

if (import.meta.main) {
  const input = readFileSync("d07.txt", "utf-8");
  console.log("Day 07 - Task 1:", solveD07T1(input));
}
