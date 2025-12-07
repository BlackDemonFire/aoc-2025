import { readFileSync } from "node:fs";

export function solveD06T2(input: string): string {
  const lines = input.split("\n").filter((e) => e.length > 0);
  const operators = lines.pop()!.trim().split(/ +/);
  let nums: number[][] = [];
  for (let col = 0; col < lines[0].length; col) {
    let tmpNums = [];
    let newNum: string;
    do {
      const elements = lines.map((l) => l[col]);
      newNum = "";
      for (const elem of elements) newNum += elem ?? " ";
      newNum = newNum.replaceAll(" ", "");
      tmpNums.push(Number.parseInt(newNum, 10));
      col += 1;
    } while (newNum !== "");
    nums.push(tmpNums.filter((e) => !Number.isNaN(e)));
  }
  return operators
    .map((op, idx) =>
      op === "+"
        ? nums[idx].reduce<number>((prev, cur) => prev + cur, 0)
        : nums[idx].reduce<number>((prev, cur) => prev * cur, 1),
    )
    .reduce<number>((prev, cur) => prev + cur, 0)
    .toString();
}

if (import.meta.main) {
  const input = readFileSync("d06.txt", "utf-8");
  console.log("Day 06 - Task 2:", solveD06T2(input));
}
