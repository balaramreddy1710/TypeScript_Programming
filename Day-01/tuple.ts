let ourTuple: [number, boolean, string];
ourTuple = [5, false, "Coding God was here"];
ourTuple.push("Something new and wrong");
console.log(ourTuple);

let readonlytuple: readonly [number, boolean, string] = [
  5,
  false,
  "Coding God was here",
];

// readonlytuple.push('Hi')
console.log(readonlytuple);

const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);
let [a, b] = graph;
console.log(a, b);
