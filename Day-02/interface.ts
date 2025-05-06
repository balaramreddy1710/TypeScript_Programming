interface Person {
  name: string;
  age: number;
  gender?: string;
}

const man: Person = {
  name: "Ram",
  age: 21,
  gender: "Male",
};

const man2: Person = {
  name: "Null",
  age: 25,
};

console.log(man);
console.log(man2);

interface Professor extends Person {
  field: string;
}

const pr: Professor = {
  name: "Raj",
  age: 35,
  field: "Astronomy",
};

console.log(pr);
