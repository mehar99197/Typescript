// Week 1: TypeScript Basics - Day 3: Interfaces and Type Aliases

// 1. Basic Interface
interface User {
  id: number;
  name: string;
  email: string;
}

const user1: User = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@example.com"
};

console.log(user1);

// 2. Optional properties
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional
}

const product1: Product = {
  id: 101,
  name: "Laptop",
  price: 999.99
};

const product2: Product = {
  id: 102,
  name: "Mouse",
  price: 29.99,
  description: "Wireless mouse with ergonomic design"
};

console.log(product1, product2);

// 3. Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
console.log(point);
// point.x = 5; // Error! Cannot assign to 'x' because it is a read-only property

// 4. Extending interfaces
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: "Max",
  age: 3,
  breed: "Golden Retriever",
  bark: () => console.log("Woof! Woof!")
};

myDog.bark();

// 5. Type Aliases
type ID = number | string;
type Status = "active" | "inactive" | "pending";

interface Task {
  id: ID;
  title: string;
  status: Status;
}

const task1: Task = {
  id: "task-001",
  title: "Learn TypeScript",
  status: "active"
};

console.log(task1);

// 6. Union Types
type Result = number | string | boolean;

function displayResult(result: Result): void {
  console.log(`Result: ${result}`);
}

displayResult(42);
displayResult("Success");
displayResult(true);

// 7. Intersection Types
interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

type Document = Printable & Loggable;

const doc: Document = {
  print: () => console.log("Printing document..."),
  log: () => console.log("Logging document...")
};

doc.print();
doc.log();

// 8. Index Signatures
interface StringMap {
  [key: string]: string;
}

const settings: StringMap = {
  theme: "dark",
  language: "en",
  timezone: "UTC"
};

console.log(settings);

export { User, Product, Point, Animal, Dog, Task, Result, Document, StringMap };
