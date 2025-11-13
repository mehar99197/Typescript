// Week 2: Advanced Types - Day 2: Utility Types

// 1. Partial<T> - Makes all properties optional
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "Learn TypeScript",
  description: "Complete the 1-month challenge",
  completed: false
};

const updatedTodo = updateTodo(todo1, { completed: true });
console.log(updatedTodo);

// 2. Required<T> - Makes all properties required
interface PartialUser {
  name?: string;
  email?: string;
  age?: number;
}

type CompleteUser = Required<PartialUser>;

const user: CompleteUser = {
  name: "Alice",
  email: "alice@example.com",
  age: 25
};

console.log(user);

// 3. Readonly<T> - Makes all properties readonly
interface MutablePoint {
  x: number;
  y: number;
}

const point: Readonly<MutablePoint> = {
  x: 10,
  y: 20
};

console.log(point);
// point.x = 5; // Error! Cannot assign to 'x' because it is a read-only property

// 4. Record<K, T> - Creates an object type with specific keys and value types
type UserRole = "admin" | "user" | "guest";

const rolePermissions: Record<UserRole, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};

console.log(rolePermissions);

// 5. Pick<T, K> - Creates a type by picking specific properties
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

type ProductPreview = Pick<Product, "id" | "name" | "price">;

const preview: ProductPreview = {
  id: 1,
  name: "Laptop",
  price: 999.99
};

console.log(preview);

// 6. Omit<T, K> - Creates a type by omitting specific properties
type ProductWithoutId = Omit<Product, "id">;

const newProduct: ProductWithoutId = {
  name: "Mouse",
  price: 29.99,
  description: "Wireless mouse",
  category: "Accessories"
};

console.log(newProduct);

// 7. Exclude<T, U> - Excludes types from a union
type AllStatus = "active" | "inactive" | "pending" | "deleted";
type ActiveStatus = Exclude<AllStatus, "deleted">;

const status: ActiveStatus = "active";
console.log(status);

// 8. Extract<T, U> - Extracts types from a union
type StringOrNumber = Extract<string | number | boolean, string | number>;

const value: StringOrNumber = "hello";
console.log(value);

// 9. NonNullable<T> - Removes null and undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;

const text: DefiniteString = "Hello";
console.log(text);

// 10. ReturnType<T> - Gets the return type of a function
function createUser(name: string, age: number) {
  return { name, age, createdAt: new Date() };
}

type User = ReturnType<typeof createUser>;

const newUser: User = {
  name: "Bob",
  age: 30,
  createdAt: new Date()
};

console.log(newUser);

// 11. Parameters<T> - Gets the parameter types of a function
type CreateUserParams = Parameters<typeof createUser>;

const params: CreateUserParams = ["Alice", 25];
console.log(createUser(...params));

export { 
  Todo, 
  CompleteUser, 
  UserRole, 
  ProductPreview, 
  ProductWithoutId, 
  ActiveStatus, 
  User 
};
