// Week 4: Practical Projects - Day 2: User Management System

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address?: Address;
  role: "admin" | "user" | "moderator";
  createdAt: Date;
  lastLogin?: Date;
  isActive: boolean;
}

type UserInput = Omit<User, "id" | "createdAt" | "lastLogin" | "isActive">;

class UserManager {
  private users: Map<string, User> = new Map();
  private usernameIndex: Map<string, string> = new Map();
  private emailIndex: Map<string, string> = new Map();

  private generateId(): string {
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  createUser(userInput: UserInput): User | null {
    // Validate username uniqueness
    if (this.usernameIndex.has(userInput.username)) {
      console.log(`✗ Username "${userInput.username}" already exists`);
      return null;
    }

    // Validate email uniqueness
    if (this.emailIndex.has(userInput.email)) {
      console.log(`✗ Email "${userInput.email}" already exists`);
      return null;
    }

    const user: User = {
      ...userInput,
      id: this.generateId(),
      createdAt: new Date(),
      isActive: true
    };

    this.users.set(user.id, user);
    this.usernameIndex.set(user.username, user.id);
    this.emailIndex.set(user.email, user.id);

    console.log(`✓ User created: ${user.username} (${user.email})`);
    return user;
  }

  getUserById(id: string): User | undefined {
    return this.users.get(id);
  }

  getUserByUsername(username: string): User | undefined {
    const userId = this.usernameIndex.get(username);
    return userId ? this.users.get(userId) : undefined;
  }

  getUserByEmail(email: string): User | undefined {
    const userId = this.emailIndex.get(email);
    return userId ? this.users.get(userId) : undefined;
  }

  updateUser(id: string, updates: Partial<UserInput>): boolean {
    const user = this.users.get(id);
    if (!user) {
      console.log(`✗ User with id ${id} not found`);
      return false;
    }

    // Check if username is being changed and if it's unique
    if (updates.username && updates.username !== user.username) {
      if (this.usernameIndex.has(updates.username)) {
        console.log(`✗ Username "${updates.username}" already exists`);
        return false;
      }
      this.usernameIndex.delete(user.username);
      this.usernameIndex.set(updates.username, id);
    }

    // Check if email is being changed and if it's unique
    if (updates.email && updates.email !== user.email) {
      if (this.emailIndex.has(updates.email)) {
        console.log(`✗ Email "${updates.email}" already exists`);
        return false;
      }
      this.emailIndex.delete(user.email);
      this.emailIndex.set(updates.email, id);
    }

    Object.assign(user, updates);
    console.log(`✓ User updated: ${user.username}`);
    return true;
  }

  deleteUser(id: string): boolean {
    const user = this.users.get(id);
    if (!user) {
      console.log(`✗ User with id ${id} not found`);
      return false;
    }

    this.users.delete(id);
    this.usernameIndex.delete(user.username);
    this.emailIndex.delete(user.email);

    console.log(`✓ User deleted: ${user.username}`);
    return true;
  }

  login(username: string, password: string): User | null {
    const user = this.getUserByUsername(username);
    if (!user) {
      console.log(`✗ Invalid username or password`);
      return null;
    }

    if (user.password !== password) {
      console.log(`✗ Invalid username or password`);
      return null;
    }

    if (!user.isActive) {
      console.log(`✗ Account is inactive`);
      return null;
    }

    user.lastLogin = new Date();
    console.log(`✓ Login successful: ${user.username}`);
    return user;
  }

  deactivateUser(id: string): boolean {
    const user = this.users.get(id);
    if (!user) {
      console.log(`✗ User with id ${id} not found`);
      return false;
    }

    user.isActive = false;
    console.log(`✓ User deactivated: ${user.username}`);
    return true;
  }

  getUsersByRole(role: User["role"]): User[] {
    return Array.from(this.users.values()).filter(user => user.role === role);
  }

  getAllUsers(): User[] {
    return Array.from(this.users.values());
  }

  displayUsers(): void {
    console.log("\n=== User List ===");
    const users = this.getAllUsers();
    if (users.length === 0) {
      console.log("No users found.");
      return;
    }

    users.forEach(user => {
      const status = user.isActive ? "Active" : "Inactive";
      console.log(`${user.username} (${user.email}) - ${user.role} [${status}]`);
      console.log(`  Name: ${user.firstName} ${user.lastName}`);
      console.log(`  Created: ${user.createdAt.toLocaleDateString()}`);
      if (user.lastLogin) {
        console.log(`  Last Login: ${user.lastLogin.toLocaleString()}`);
      }
      console.log();
    });
  }
}

// Demo usage
console.log("=== TypeScript User Management System ===\n");

const userManager = new UserManager();

// Create users
const admin = userManager.createUser({
  username: "admin",
  email: "admin@example.com",
  password: "admin123",
  firstName: "Admin",
  lastName: "User",
  role: "admin"
});

const user1 = userManager.createUser({
  username: "john_doe",
  email: "john@example.com",
  password: "password123",
  firstName: "John",
  lastName: "Doe",
  role: "user",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA"
  }
});

const user2 = userManager.createUser({
  username: "jane_smith",
  email: "jane@example.com",
  password: "password456",
  firstName: "Jane",
  lastName: "Smith",
  role: "moderator"
});

// Display all users
userManager.displayUsers();

// Login
console.log("--- Login Attempts ---");
userManager.login("john_doe", "password123");
userManager.login("admin", "wrongpassword");

// Update user
console.log("\n--- Updating User ---");
if (user1) {
  userManager.updateUser(user1.id, {
    firstName: "Jonathan"
  });
}

// Get users by role
console.log("\n--- Admin Users ---");
const admins = userManager.getUsersByRole("admin");
admins.forEach(u => console.log(`- ${u.username}`));

export { User, UserInput, Address, UserManager };
