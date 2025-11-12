# TypeScript Quick Reference

A quick cheat sheet for TypeScript syntax and features covered in this course.

## Basic Types

```typescript
// Primitives
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuples
let person: [string, number] = ["John", 30];

// Enums
enum Color { Red, Green, Blue }
let color: Color = Color.Red;

// Any, Unknown, Void
let anything: any = "flexible";
let userInput: unknown = "safer";
function noReturn(): void { }

// Null and Undefined
let empty: null = null;
let notDefined: undefined = undefined;
```

## Functions

```typescript
// Basic function
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}`;
}

// Default parameters
function createUser(name: string, role: string = "user"): void { }

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Arrow functions
const multiply = (a: number, b: number): number => a * b;

// Function types
type MathOp = (a: number, b: number) => number;
```

## Interfaces & Types

```typescript
// Interface
interface User {
  id: number;
  name: string;
  email?: string;  // Optional
  readonly created: Date;  // Readonly
}

// Extending interfaces
interface Admin extends User {
  permissions: string[];
}

// Type alias
type ID = number | string;
type Status = "active" | "inactive";

// Union types
let value: string | number = "hello";

// Intersection types
type Employee = User & { department: string };

// Index signatures
interface StringMap {
  [key: string]: string;
}
```

## Generics

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Container<T> {
  value: T;
}

// Generic class
class Box<T> {
  constructor(public value: T) {}
}

// Generic constraints
interface Lengthwise {
  length: number;
}
function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

## Utility Types

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial - all properties optional
type PartialTodo = Partial<Todo>;

// Required - all properties required
type RequiredTodo = Required<Todo>;

// Readonly - all properties readonly
type ReadonlyTodo = Readonly<Todo>;

// Pick - select specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit - exclude specific properties
type TodoInfo = Omit<Todo, "completed">;

// Record - create object type with specific keys
type UserRoles = Record<"admin" | "user" | "guest", string[]>;

// Exclude - exclude from union
type Status = "active" | "inactive" | "deleted";
type ActiveStatus = Exclude<Status, "deleted">;

// Extract - extract from union
type Numbers = Extract<string | number | boolean, number>;

// NonNullable - remove null and undefined
type NotNull = NonNullable<string | null | undefined>;

// ReturnType - get function return type
function createUser() { return { name: "John", age: 30 }; }
type User = ReturnType<typeof createUser>;

// Parameters - get function parameters
type Params = Parameters<typeof createUser>;
```

## Type Guards

```typescript
// typeof
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// instanceof
class Dog { bark() {} }
class Cat { meow() {} }

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// in operator
interface Bird { fly(): void; }
interface Fish { swim(): void; }

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

// User-defined type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

## Classes

```typescript
// Basic class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// Access modifiers
class BankAccount {
  private balance: number;
  protected accountNumber: string;
  public owner: string;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
    this.accountNumber = this.generateAccountNumber();
  }

  private generateAccountNumber(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }
}

// Readonly properties
class Car {
  readonly vin: string;
  constructor(vin: string) {
    this.vin = vin;
  }
}

// Inheritance
class Animal {
  constructor(public name: string) {}
  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

// Abstract classes
abstract class Shape {
  abstract getArea(): number;
  
  displayArea(): void {
    console.log(`Area: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Static members
class MathHelper {
  static PI: number = 3.14159;
  
  static calculateCircleArea(radius: number): number {
    return this.PI * radius ** 2;
  }
}

// Getters and setters
class Temperature {
  private _celsius: number = 0;
  
  get celsius(): number {
    return this._celsius;
  }
  
  set celsius(value: number) {
    this._celsius = value;
  }
  
  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }
}
```

## Advanced Features

```typescript
// Optional chaining
const user = { address: { city: "NYC" } };
const city = user?.address?.city;

// Nullish coalescing
const value = userInput ?? "default";

// Non-null assertion
const element = document.getElementById("app")!;

// Type assertion
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

// Const assertion
const config = {
  width: 100,
  height: 200
} as const;

// Template literal types
type EventName = "click" | "scroll";
type HandlerName = `on${Capitalize<EventName>}`;
// Results in: "onClick" | "onScroll"
```

## Common Patterns

```typescript
// Singleton
class Database {
  private static instance: Database;
  
  private constructor() {}
  
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

// Factory
interface Product {
  create(): void;
}

class ProductFactory {
  static createProduct(type: string): Product {
    // Create and return product based on type
  }
}

// Observer
interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];
  
  attach(observer: Observer): void {
    this.observers.push(observer);
  }
  
  notify(data: any): void {
    this.observers.forEach(o => o.update(data));
  }
}
```

## Tips

- Use `unknown` instead of `any` when possible
- Prefer `interface` for object shapes, `type` for unions/intersections
- Enable `strict` mode in tsconfig.json
- Use type inference when types are obvious
- Create custom type guards for complex types
- Use utility types to transform existing types
- Leverage generics for reusable code

---

For more details, refer to the example files in the `src/` directory!
