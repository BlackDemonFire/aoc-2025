import { readFileSync } from "node:fs";

function isInvalid(id: string): boolean {
  if (id.length % 2) return false;
  const mid = id.length / 2;
  if (id.slice(0, mid) === id.slice(mid)) return true;
  return false;
}

export function solveD02T1(input: string, debug = false): string {
  const pairs = input
    .split(",")
    .map((pair) => pair.split("-") as [firstId: string, lastId: string]);
  let result = 0;
  for (const [firstId, lastId] of pairs) {
    const firstIdNum = parseInt(firstId, 10);
    const lastIdNum = parseInt(lastId, 10);
    let id = firstIdNum;
    while (id <= lastIdNum) {
      if (isInvalid(id.toString())) {
        if (debug) console.debug(`Found invalid id: ${id}`);
        result += id;
      }
      id += 1;
    }
  }
  return result.toString();
}

// TODO: if file is run directly
if (true) {
  const input = readFileSync("d02.txt", "utf-8");
  console.log("Day 02 - Task 1:", solveD02T1(input, true));
}
