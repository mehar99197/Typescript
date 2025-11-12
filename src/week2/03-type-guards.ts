// Week 2: Advanced Types - Day 3: Type Guards and Narrowing

// 1. typeof Type Guards
function processValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase(); // TypeScript knows it's a string
  } else {
    return value.toFixed(2); // TypeScript knows it's a number
  }
}

console.log(processValue("hello")); // HELLO
console.log(processValue(42.12345)); // 42.12

// 2. instanceof Type Guards
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());

// 3. in Operator Type Guards
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function move(animal: Bird | Fish): void {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

const bird: Bird = {
  fly: () => console.log("Flying..."),
  layEggs: () => console.log("Laying eggs...")
};

const fish: Fish = {
  swim: () => console.log("Swimming..."),
  layEggs: () => console.log("Laying eggs...")
};

move(bird);
move(fish);

// 4. User-Defined Type Guards
interface User {
  type: "user";
  name: string;
  email: string;
}

interface Admin {
  type: "admin";
  name: string;
  email: string;
  permissions: string[];
}

function isAdmin(account: User | Admin): account is Admin {
  return account.type === "admin";
}

function getPermissions(account: User | Admin): string[] {
  if (isAdmin(account)) {
    return account.permissions; // TypeScript knows it's an Admin
  }
  return []; // User has no permissions
}

const user: User = {
  type: "user",
  name: "John",
  email: "john@example.com"
};

const admin: Admin = {
  type: "admin",
  name: "Alice",
  email: "alice@example.com",
  permissions: ["read", "write", "delete"]
};

console.log(getPermissions(user));
console.log(getPermissions(admin));

// 5. Discriminated Unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", sideLength: 10 };
const rectangle: Rectangle = { kind: "rectangle", width: 5, height: 10 };

console.log(`Circle area: ${getArea(circle).toFixed(2)}`);
console.log(`Square area: ${getArea(square)}`);
console.log(`Rectangle area: ${getArea(rectangle)}`);

// 6. Nullish Coalescing and Optional Chaining
interface Config {
  timeout?: number;
  retries?: number;
  logger?: {
    level?: string;
  };
}

function getLogLevel(config: Config): string {
  // Optional chaining
  return config.logger?.level ?? "info"; // Nullish coalescing
}

const config1: Config = { timeout: 5000 };
const config2: Config = { 
  timeout: 5000, 
  logger: { level: "debug" } 
};

console.log(getLogLevel(config1)); // "info"
console.log(getLogLevel(config2)); // "debug"

export { 
  Dog, 
  Cat, 
  Bird, 
  Fish, 
  User, 
  Admin, 
  Shape, 
  Circle, 
  Square, 
  Rectangle, 
  isAdmin, 
  getArea 
};
