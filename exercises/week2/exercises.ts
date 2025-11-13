// Week 2 Exercises: Advanced Types

/* 
  EXERCISE 1: Generics
  ─────────────────────────────────────────────────────────
  Create a generic function 'getLastElement' that:
  - Takes an array of any type
  - Returns the last element of the array (or undefined if empty)
  
  Test it with arrays of different types (numbers, strings, objects)
*/

// TODO: Write your code here


/* 
  EXERCISE 2: Generic Class
  ─────────────────────────────────────────────────────────
  Create a generic class 'Stack' with the following methods:
  - push(item: T): void - adds an item to the stack
  - pop(): T | undefined - removes and returns the last item
  - peek(): T | undefined - returns the last item without removing it
  - isEmpty(): boolean - checks if the stack is empty
  
  Test it with both numbers and strings
*/

// TODO: Write your code here


/* 
  EXERCISE 3: Utility Types
  ─────────────────────────────────────────────────────────
  Given this interface:
  
  interface Employee {
    id: number;
    name: string;
    email: string;
    department: string;
    salary: number;
  }
  
  Create the following types:
  1. PartialEmployee - all properties optional (use Partial)
  2. EmployeePreview - only id, name, and department (use Pick)
  3. EmployeeWithoutSalary - all properties except salary (use Omit)
  
  Create an object for each type
*/

// TODO: Write your code here


/* 
  EXERCISE 4: Type Guards
  ─────────────────────────────────────────────────────────
  Create two interfaces:
  - Rectangle with width and height properties
  - Circle with radius property
  
  Create a union type Shape = Rectangle | Circle
  
  Write a function 'calculateArea' that:
  - Takes a Shape as parameter
  - Uses type guards to determine if it's a Rectangle or Circle
  - Returns the correct area calculation
  
  Hint: Use the 'in' operator to check for properties
*/

// TODO: Write your code here


/* 
  EXERCISE 5: Challenge - API Response Handler
  ─────────────────────────────────────────────────────────
  Create a generic ApiResponse type with:
  - success (boolean)
  - data (generic type T)
  - error (optional string)
  
  Create a function 'handleResponse' that:
  - Takes an ApiResponse<T> as parameter
  - If success is true, log the data
  - If success is false, log the error
  - Returns the data if successful, otherwise undefined
  
  Test it with different data types (user object, array of numbers, etc.)
*/

// TODO: Write your code here


// Export your solutions (uncomment when ready)
// export {};
