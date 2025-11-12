// Week 4: Practical Projects - Day 1: Todo List Application

interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  priority: "low" | "medium" | "high";
}

class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;

  addTodo(title: string, description: string, priority: "low" | "medium" | "high" = "medium"): TodoItem {
    const todo: TodoItem = {
      id: this.nextId++,
      title,
      description,
      completed: false,
      createdAt: new Date(),
      priority
    };
    this.todos.push(todo);
    console.log(`✓ Added: "${title}"`);
    return todo;
  }

  completeTodo(id: number): boolean {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = true;
      console.log(`✓ Completed: "${todo.title}"`);
      return true;
    }
    console.log(`✗ Todo with id ${id} not found`);
    return false;
  }

  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex(t => t.id === id);
    if (index > -1) {
      const deleted = this.todos.splice(index, 1)[0];
      console.log(`✓ Deleted: "${deleted.title}"`);
      return true;
    }
    console.log(`✗ Todo with id ${id} not found`);
    return false;
  }

  getTodos(filter?: "all" | "active" | "completed"): TodoItem[] {
    switch (filter) {
      case "active":
        return this.todos.filter(t => !t.completed);
      case "completed":
        return this.todos.filter(t => t.completed);
      default:
        return [...this.todos];
    }
  }

  getTodosByPriority(priority: "low" | "medium" | "high"): TodoItem[] {
    return this.todos.filter(t => t.priority === priority);
  }

  displayTodos(filter?: "all" | "active" | "completed"): void {
    const todos = this.getTodos(filter);
    console.log(`\n=== Todo List (${filter || "all"}) ===`);
    if (todos.length === 0) {
      console.log("No todos found.");
      return;
    }

    todos.forEach(todo => {
      const status = todo.completed ? "✓" : " ";
      const priority = todo.priority.toUpperCase();
      console.log(`[${status}] ${todo.id}. ${todo.title} [${priority}]`);
      console.log(`    ${todo.description}`);
    });
  }

  getStats(): { total: number; active: number; completed: number } {
    return {
      total: this.todos.length,
      active: this.todos.filter(t => !t.completed).length,
      completed: this.todos.filter(t => t.completed).length
    };
  }
}

// Demo usage
console.log("=== TypeScript Todo List Application ===\n");

const todoList = new TodoList();

// Add some todos
todoList.addTodo(
  "Learn TypeScript Basics",
  "Study variables, types, and functions",
  "high"
);

todoList.addTodo(
  "Practice Generics",
  "Understand generic types and constraints",
  "high"
);

todoList.addTodo(
  "Build a Project",
  "Create a practical TypeScript application",
  "medium"
);

todoList.addTodo(
  "Read Documentation",
  "Go through official TypeScript docs",
  "low"
);

// Display all todos
todoList.displayTodos();

// Complete some todos
console.log("\n--- Completing Tasks ---");
todoList.completeTodo(1);
todoList.completeTodo(2);

// Display active todos
todoList.displayTodos("active");

// Display completed todos
todoList.displayTodos("completed");

// Show statistics
console.log("\n--- Statistics ---");
const stats = todoList.getStats();
console.log(`Total: ${stats.total}`);
console.log(`Active: ${stats.active}`);
console.log(`Completed: ${stats.completed}`);

// Display high priority todos
console.log("\n--- High Priority Todos ---");
const highPriority = todoList.getTodosByPriority("high");
highPriority.forEach(todo => {
  console.log(`- ${todo.title} ${todo.completed ? "(completed)" : ""}`);
});

export { TodoItem, TodoList };
