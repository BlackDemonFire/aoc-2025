import { readFileSync } from "node:fs";

export function solveD01T1(input: string): string {
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
    while (move > 0 || move < 0) {
      const prev = dial;
      if (move >= 100) {
        move -= 100;
        result += 1;
        console.log("overturn R");
      } else if (move < -100) {
        move += 100;
        result += 1;
        console.log("overturn L");
      } else {
        dial += move;
        if ((dial === 0 || dial >= 100 || dial < 0) && prev !== 0) {
          result += 1;
        }
        if (dial < 0) {
          dial += 100;
          console.log("wrap around L");
        } else if (dial >= 100) {
          dial -= 100;
          console.log("wrap around R");
        } else console.log("hit 0");
        move = 0;
      }
      console.log(
        `Line: ${line}, Move: ${move}, Dial: ${dial}, Result: ${result}`,
      );
    }
  }
  return result.toString();
}

// TODO: if file is run directly
if (true) {
  const input = readFileSync("d01.txt");
  console.log("Day 01 - Task 2:", solveD01T1(input.toString()));
}
