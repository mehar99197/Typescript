// Week 4 Exercises: Practical Projects

/* 
  EXERCISE 1: Calculator Class
  ─────────────────────────────────────────────────────────
  Create a Calculator class with:
  - Properties to store calculation history (array of strings)
  - Methods: add, subtract, multiply, divide (all take two numbers)
  - Method getHistory(): string[] - returns calculation history
  - Method clearHistory(): void - clears the history
  
  Each calculation should be added to history with format:
  "5 + 3 = 8"
  
  Handle division by zero appropriately
*/

// TODO: Write your code here


/* 
  EXERCISE 2: Contact Manager
  ─────────────────────────────────────────────────────────
  Create a Contact Manager with:
  
  Interface 'Contact':
  - id (string)
  - name (string)
  - email (string)
  - phone (string)
  - category ("family" | "friend" | "work")
  
  Class 'ContactManager':
  - Private Map to store contacts
  - addContact(contact: Omit<Contact, "id">): Contact
  - deleteContact(id: string): boolean
  - findByName(name: string): Contact[]
  - findByCategory(category: Contact["category"]): Contact[]
  - getAllContacts(): Contact[]
  
  Implement auto-generated IDs for contacts
*/

// TODO: Write your code here


/* 
  EXERCISE 3: Shopping Cart System
  ─────────────────────────────────────────────────────────
  Create a shopping cart system with:
  
  Interface 'Product':
  - id (string)
  - name (string)
  - price (number)
  - stock (number)
  
  Interface 'CartItem':
  - product (Product)
  - quantity (number)
  
  Class 'ShoppingCart':
  - Private array of CartItem
  - addItem(product: Product, quantity: number): boolean
    (check if enough stock is available)
  - removeItem(productId: string): boolean
  - updateQuantity(productId: string, quantity: number): boolean
  - getTotal(): number
  - getItemCount(): number
  - clear(): void
  - getItems(): CartItem[]
*/

// TODO: Write your code here


/* 
  EXERCISE 4: Event Manager
  ─────────────────────────────────────────────────────────
  Create an Event Manager using the Observer pattern:
  
  Interface 'EventListener':
  - handleEvent(data: any): void
  
  Class 'EventManager':
  - Private Map of event names to arrays of listeners
  - subscribe(eventName: string, listener: EventListener): void
  - unsubscribe(eventName: string, listener: EventListener): void
  - emit(eventName: string, data: any): void
  
  Create at least two listener classes and demonstrate
  subscribing to events and emitting them
*/

// TODO: Write your code here


/* 
  EXERCISE 5: Challenge - Task Management System
  ─────────────────────────────────────────────────────────
  Build a comprehensive Task Management System:
  
  1. Interface 'Task':
     - id (string)
     - title (string)
     - description (string)
     - status ("todo" | "in-progress" | "done")
     - priority (1-5, where 5 is highest)
     - assignee (string)
     - dueDate (Date)
     - tags (string[])
  
  2. Class 'TaskManager':
     - createTask(task: Omit<Task, "id">): Task
     - updateTask(id: string, updates: Partial<Task>): boolean
     - deleteTask(id: string): boolean
     - getTaskById(id: string): Task | undefined
     - getTasksByStatus(status: Task["status"]): Task[]
     - getTasksByAssignee(assignee: string): Task[]
     - getTasksByPriority(minPriority: number): Task[]
     - getOverdueTasks(): Task[]
     - searchByTag(tag: string): Task[]
     - getStats(): { total: number; todo: number; inProgress: number; done: number }
  
  Create a comprehensive demo showing all functionality
*/

// TODO: Write your code here


// Export your solutions (uncomment when ready)
// export {};
