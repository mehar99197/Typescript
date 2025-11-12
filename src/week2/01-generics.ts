// Week 2: Advanced Types - Day 1: Generics

// 1. Basic Generic Function
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"

// 2. Generic Interface
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

class Box<T> implements Container<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // 42

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // "Hello"

// 3. Generic Constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(`Length: ${arg.length}`);
}

logLength("Hello"); // Works - strings have length
logLength([1, 2, 3]); // Works - arrays have length
// logLength(42); // Error - numbers don't have length

// 4. Multiple Type Parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result1 = pair<string, number>("age", 25);
const result2 = pair<boolean, string>(true, "success");
console.log(result1, result2);

// 5. Generic Classes
class DataStore<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }

  removeItem(index: number): void {
    this.data.splice(index, 1);
  }
}

const numberStore = new DataStore<number>();
numberStore.addItem(10);
numberStore.addItem(20);
console.log(numberStore.getItems()); // [10, 20]

const stringStore = new DataStore<string>();
stringStore.addItem("Hello");
stringStore.addItem("World");
console.log(stringStore.getItems()); // ["Hello", "World"]

// 6. Generic Type Aliases
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Alice" },
  status: 200,
  message: "Success"
};

console.log(userResponse);

// 7. Default Generic Types
class Cache<T = string> {
  private cache: Map<string, T> = new Map();

  set(key: string, value: T): void {
    this.cache.set(key, value);
  }

  get(key: string): T | undefined {
    return this.cache.get(key);
  }
}

const stringCache = new Cache(); // Defaults to Cache<string>
stringCache.set("name", "John");
console.log(stringCache.get("name"));

const numberCache = new Cache<number>();
numberCache.set("age", 30);
console.log(numberCache.get("age"));

export { Container, Box, DataStore, ApiResponse, Cache };
