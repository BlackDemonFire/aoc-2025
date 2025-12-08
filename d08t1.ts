import { readFileSync } from "node:fs";

type Coord = [x: number, y: number, z: number];

export function solveD08T1(input: string, connectionsToMake = 1000): string {
  const coords = input
    .trim()
    .split("\n")
    .map((line) => line.split(",").map((e) => Number.parseInt(e, 10)) as Coord);

  const distances: [from: Coord, to: Coord, distance: number][] = [];
  for (let i = 0; i < coords.length; i++) {
    const element = coords[i];
    for (let j = i + 1; j < coords.length; j++) {
      const elementB = coords[j];
      distances.push([
        element,
        elementB,
        Math.sqrt(
          Math.pow(element[0] - elementB[0], 2) +
            Math.pow(element[1] - elementB[1], 2) +
            Math.pow(element[2] - elementB[2], 2),
        ),
      ]);
    }
  }
  distances.sort((a, b) => b[2] - a[2]);
  console.log(distances.length);
  let networks: Coord[][] = [];
  for (let index = 0; index < connectionsToMake; index++) {
    const [a, b] = distances.pop()!;
    const aNetwork = networks.find((c) => c.includes(a));
    const bNetwork = networks.find((c) => c.includes(b));
    if (aNetwork && aNetwork === bNetwork) continue;
    if (aNetwork && bNetwork) {
      networks.splice(networks.indexOf(bNetwork), 1);
      aNetwork.push(...bNetwork);
    } else if (aNetwork) aNetwork.push(b);
    else if (bNetwork) bNetwork.push(a);
    else networks.push([a, b]);
  }

  networks.sort((a, b) => b.length - a.length);
  return networks
    .slice(0, 3)
    .map((e) => e.length)
    .reduce((a, b) => a * b, 1)
    .toString();
}

if (import.meta.main) {
  const demoInput = readFileSync("d08-demo.txt", "utf-8");
  console.log("Day 08 - Task 1 (demo):", solveD08T1(demoInput, 10));
  const input = readFileSync("d08.txt", "utf-8");
  console.log("Day 08 - Task 1:", solveD08T1(input));
}
