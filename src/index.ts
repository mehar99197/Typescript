// Main entry point for TypeScript Learning Challenge
// Run different lessons and examples

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("╔════════════════════════════════════════════╗");
console.log("║  TypeScript Learning Challenge - 1 Month  ║");
console.log("╚════════════════════════════════════════════╝\n");

console.log("Welcome to your TypeScript learning journey!\n");

console.log("Available Lessons:");
console.log("─────────────────────────────────────────────");
console.log("\nWeek 1 - TypeScript Basics:");
console.log("  1. Basic Types");
console.log("  2. Functions");
console.log("  3. Interfaces and Type Aliases");

console.log("\nWeek 2 - Advanced Types:");
console.log("  4. Generics");
console.log("  5. Utility Types");
console.log("  6. Type Guards and Narrowing");

console.log("\nWeek 3 - Object-Oriented Programming:");
console.log("  7. Classes and Inheritance");
console.log("  8. Design Patterns");

console.log("\nWeek 4 - Practical Projects:");
console.log("  9. Todo List Application");
console.log("  10. User Management System");

console.log("\n─────────────────────────────────────────────");

function runLesson(lesson: string): void {
  console.log(`\n\n╔════════════════════════════════════════════╗`);
  console.log(`║  Running Lesson: ${lesson.padEnd(25)} ║`);
  console.log(`╚════════════════════════════════════════════╝\n`);

  switch (lesson) {
    case "1":
      console.log("To run: npm run dev src/week1/01-basic-types.ts");
      break;
    case "2":
      console.log("To run: npm run dev src/week1/02-functions.ts");
      break;
    case "3":
      console.log("To run: npm run dev src/week1/03-interfaces-types.ts");
      break;
    case "4":
      console.log("To run: npm run dev src/week2/01-generics.ts");
      break;
    case "5":
      console.log("To run: npm run dev src/week2/02-utility-types.ts");
      break;
    case "6":
      console.log("To run: npm run dev src/week2/03-type-guards.ts");
      break;
    case "7":
      console.log("To run: npm run dev src/week3/01-classes.ts");
      break;
    case "8":
      console.log("To run: npm run dev src/week3/02-design-patterns.ts");
      break;
    case "9":
      console.log("To run: npm run dev src/week4/01-todo-app.ts");
      break;
    case "10":
      console.log("To run: npm run dev src/week4/02-user-management.ts");
      break;
    default:
      console.log("Invalid lesson number!");
  }
}

rl.question("\nEnter lesson number (1-10) or 'q' to quit: ", (answer) => {
  if (answer.toLowerCase() === "q") {
    console.log("\nHappy learning! 🚀\n");
    rl.close();
  } else {
    runLesson(answer);
    rl.close();
  }
});
