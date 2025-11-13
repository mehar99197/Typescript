// Week 1: TypeScript Basics - Day 1: Introduction and Basic Types

// 1. String Type
const greeting: string = "Hello, TypeScript!";
console.log(greeting);

// 2. Number Type
const age: number = 25;
const price: number = 99.99;
console.log(`Age: ${age}, Price: $${price}`);

// 3. Boolean Type
const isStudent: boolean = true;
const hasCompleted: boolean = false;
console.log(`Is Student: ${isStudent}, Has Completed: ${hasCompleted}`);

// 4. Array Types
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];
const mixed: Array<number | string> = [1, "two", 3, "four"];
console.log(numbers, names, mixed);

// 5. Tuple Type
const person: [string, number] = ["John", 30];
console.log(`Name: ${person[0]}, Age: ${person[1]}`);

// 6. Enum Type
enum Color {
  Red,
  Green,
  Blue
}
const favoriteColor: Color = Color.Blue;
console.log(`Favorite color code: ${favoriteColor}`);

// 7. Any Type (use sparingly!)
let anything: any = "Hello";
anything = 42;
anything = true;
console.log(anything);

// 8. Unknown Type (safer alternative to any)
let userInput: unknown = "some text";
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

// 9. Void Type (for functions that don't return)
function logMessage(message: string): void {
  console.log(message);
}
logMessage("This function returns nothing");

// 10. Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log(nullValue, undefinedValue);

export { greeting, age, person, Color };
