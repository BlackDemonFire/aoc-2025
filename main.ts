import { existsSync, readFileSync } from "node:fs";
import { solveD01T1 } from "./d01t1.js";
import { solveD01T2 } from "./d01t2.js";
import { solveD02T1 } from "./d02t1.js";
import { solveD02T2 } from "./d02t2.js";

console.log("Running Day 01 with demo input:");

const demoInput01 = readFileSync("d01-demo.txt", "utf-8");

console.log("Day 01 - Task 1 (Demo):", solveD01T1(demoInput01));
console.log("Day 01 - Task 2 (Demo):", solveD01T2(demoInput01));

if (existsSync("d01.txt")) {
  const input = readFileSync("d01.txt", "utf-8");
  console.log("Day 01 - Task 1:", solveD01T1(input));
  console.log("Day 01 - Task 2:", solveD01T2(input));
} else {
  console.log("No input file found for Day 01. (d01.txt)");
}

console.log("\nRunning Day 02 with demo input:");

const demoInput02 = readFileSync("d02-demo.txt", "utf-8");

console.log("Day 02 - Task 1 (Demo):", solveD02T1(demoInput02));
console.log("Day 02 - Task 2 (Demo):", solveD02T2(demoInput02));

if (existsSync("d02.txt")) {
  const input = readFileSync("d02.txt", "utf-8");
  console.log("Day 02 - Task 1:", solveD02T1(input));
  console.log("Day 02 - Task 2:", solveD02T2(input));
} else {
  console.log("No input file found for Day 02. (d02.txt)");
}
