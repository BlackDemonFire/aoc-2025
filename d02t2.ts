import { readFileSync } from "node:fs";

function isInvalid(id: string): boolean {
  if (id.length < 2) return false;
  for (let i = 1; i <= id.length / 2; i++) {
    if (id.length % i !== 0) continue;
    const segment = id.slice(0, i);
    if (segment.repeat(id.length / i) === id) return true;
  }

  return false;
}

export function solveD02T2(input: string): string {
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
        console.debug(`Found invalid id: ${id}`);
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
  console.log("Day 02 - Task 2:", solveD02T2(input.toString()));
}
