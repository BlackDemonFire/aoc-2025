import { existsSync, readFileSync } from "node:fs";
import { solveD01T1 } from "./d01t1.ts";
import { solveD01T2 } from "./d01t2.ts";
import { solveD02T1 } from "./d02t1.ts";
import { solveD02T2 } from "./d02t2.ts";
import { solveD03T1 } from "./d03t1.ts";
import { solveD03T2 } from "./d03t2.ts";
import { solveD04T1 } from "./d04t1.ts";
import { solveD04T2 } from "./d04t2.ts";
import { solveD05T1 } from "./d05t1.ts";
import { solveD05T2 } from "./d05t2.ts";
import { solveD06T1 } from "./d06t1.ts";
import { solveD06T2 } from "./d06t2.ts";
import { solveD07T1 } from "./d07t1.ts";
import { solveD07T2 } from "./d07t2.ts";
import { solveD08T1 } from "./d08t1.ts";
import { solveD08T2 } from "./d08t2.ts";

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

console.log("\nRunning Day 03 with demo input:");

const demoInput03 = readFileSync("d03-demo.txt", "utf-8");

console.log("Day 03 - Task 1 (Demo):", solveD03T1(demoInput03));
console.log("Day 03 - Task 2 (Demo):", solveD03T2(demoInput03));

if (existsSync("d03.txt")) {
  const input = readFileSync("d03.txt", "utf-8");
  console.log("Day 03 - Task 1:", solveD03T1(input));
  console.log("Day 03 - Task 2:", solveD03T2(input));
} else {
  console.log("No input file found for Day 03. (d03.txt)");
}

console.log("\nRunning Day 04 with demo input:");

const demoInput04 = readFileSync("d04-demo.txt", "utf-8");

console.log("Day 04 - Task 1 (Demo):", solveD04T1(demoInput04));
console.log("Day 04 - Task 2 (Demo):", solveD04T2(demoInput04));

if (existsSync("d04.txt")) {
  const input = readFileSync("d04.txt", "utf-8");
  console.log("Day 04 - Task 1:", solveD04T1(input));
  console.log("Day 04 - Task 2:", solveD04T2(input));
} else {
  console.log("No input file found for Day 04. (d04.txt)");
}

console.log("\nRunning Day 05 with demo input:");

const demoInput05 = readFileSync("d05-demo.txt", "utf-8");

console.log("Day 05 - Task 1 (Demo):", solveD05T1(demoInput05));
console.log("Day 05 - Task 2 (Demo):", solveD05T2(demoInput05));

if (existsSync("d05.txt")) {
  const input = readFileSync("d05.txt", "utf-8");
  console.log("Day 05 - Task 1:", solveD05T1(input));
  console.log("Day 05 - Task 2:", solveD05T2(input));
} else {
  console.log("No input file found for Day 05. (d05.txt)");
}

console.log("\nRunning Day 06 with demo input:");

const demoInput06 = readFileSync("d06-demo.txt", "utf-8");

console.log("Day 06 - Task 1 (Demo):", solveD06T1(demoInput06));
console.log("Day 06 - Task 2 (Demo):", solveD06T2(demoInput06));

if (existsSync("d06.txt")) {
  const input = readFileSync("d06.txt", "utf-8");
  console.log("Day 06 - Task 1:", solveD06T1(input));
  console.log("Day 06 - Task 2:", solveD06T2(input));
} else {
  console.log("No input file found for Day 06. (d06.txt)");
}

console.log("\nRunning Day 07 with demo input:");

const demoInput07 = readFileSync("d07-demo.txt", "utf-8");

console.log("Day 07 - Task 1 (Demo):", solveD07T1(demoInput07));
console.log("Day 07 - Task 2 (Demo):", solveD07T2(demoInput07));

if (existsSync("d07.txt")) {
  const input = readFileSync("d07.txt", "utf-8");
  console.log("Day 07 - Task 1:", solveD07T1(input));
  console.log("Day 07 - Task 2:", solveD07T2(input));
} else {
  console.log("No input file found for Day 07. (d07.txt)");
}

console.log("\nRunning Day 08 with demo input:");

const demoInput08 = readFileSync("d08-demo.txt", "utf-8");

console.log("Day 08 - Task 1 (Demo):", solveD08T1(demoInput08));
console.log("Day 08 - Task 2 (Demo):", solveD08T2(demoInput08));

if (existsSync("d08.txt")) {
  const input = readFileSync("d08.txt", "utf-8");
  console.log("Day 08 - Task 1:", solveD08T1(input));
  console.log("Day 08 - Task 2:", solveD08T2(input));
} else {
  console.log("No input file found for Day 08. (d08.txt)");
}
