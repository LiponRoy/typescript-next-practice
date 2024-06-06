interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "address"

// Function example
// P-Hero te  3-7: Generic Constraints Using Key Of Part 1  ei video te ache

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "John",
  age: 30,
  address: "123 Main St"
};

const name1: string = getProperty(person, "name"); // Allowed keys are "name", "age", "address"
const age: number = getProperty(person, "age");
const address: string = getProperty(person, "address");

// Below line will throw a compilation error because "occupation" is not a valid key of Person
// const occupation: string = getProperty(person, "occupation");

