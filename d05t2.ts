import { readFileSync, writeFileSync } from "node:fs";

class Range {
  public start: number;
  public end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
  startsAdjacent(other: Range): boolean {
    if (other.end + 1 < this.start) return false;
    if (other.start > this.end) return false;
    return true;
  }
  endsAdjacent(other: Range): boolean {
    if (other.start - 1 > this.end) return false;
    if (other.end < this.start) return false;
    return true;
  }
  toString(): string {
    return `${this.start}-${this.end}`;
  }
}

export function solveD05T2(input: string, debug = false): string {
  const [rangesStr] = input.split("\n\n");
  let ranges = rangesStr
    .split("\n")
    .map(
      (r) =>
        r.split("-").map((e) => Number.parseInt(e, 10)) as [
          start: number,
          end: number,
        ],
    )
    .map(([start, end]) => new Range(start, end));
  let resultingRanges: Range[] = [];

  for (const range of ranges.toSorted((a, b) => a.start - b.start)) {
    const adjacentRange = resultingRanges.find(
      (r) => r.startsAdjacent(range) || r.endsAdjacent(range),
    );
    if (!adjacentRange) {
      resultingRanges.push(range);
    } else {
      adjacentRange.start = Math.min(range.start, adjacentRange.start);
      adjacentRange.end = Math.max(range.end, adjacentRange.end);
    }
  }
  if (debug) console.log("Resulting ranges:", resultingRanges);
  writeFileSync(
    "d05tmp.txt",
    resultingRanges
      .toSorted((a, b) => a.start - b.start)
      .map((rng) => rng.toString())
      .join("\n"),
  );
  return resultingRanges
    .reduce<number>((a, rng) => a + (1 + rng.end - rng.start), 0)
    .toString();
}

if (import.meta.main) {
  const input = readFileSync("d05.txt", "utf-8");
  console.log("Day 05 - Task 2:", solveD05T2(input, true));
}
