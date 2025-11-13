// Week 1: TypeScript Basics - Day 2: Functions

// 1. Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}
console.log(`5 + 3 = ${add(5, 3)}`);

// 2. Optional parameters
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));

// 3. Default parameters
function createUser(name: string, role: string = "user"): string {
  return `${name} is a ${role}`;
}
console.log(createUser("John"));
console.log(createUser("Admin User", "admin"));

// 4. Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(`Sum: ${sum(1, 2, 3, 4, 5)}`);

// 5. Arrow functions
const multiply = (a: number, b: number): number => a * b;
console.log(`4 * 5 = ${multiply(4, 5)}`);

// 6. Function types
type MathOperation = (a: number, b: number) => number;

const divide: MathOperation = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

console.log(`10 / 2 = ${divide(10, 2)}`);

// 7. Function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(5, 10));        // 15
console.log(combine("Hello, ", "World!")); // Hello, World!

// 8. Callback functions
function processArray(arr: number[], callback: (item: number) => number): number[] {
  return arr.map(callback);
}

const doubled = processArray([1, 2, 3, 4], (num) => num * 2);
console.log(`Doubled: ${doubled}`);

// 9. Generic functions
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));

export { add, greet, createUser, sum, multiply, combine, processArray, identity };
