// Week 3: Object-Oriented Programming - Day 2: Design Patterns

// 1. Singleton Pattern
class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connectionString: string;

  private constructor() {
    this.connectionString = "mongodb://localhost:27017";
    console.log("Database connection created");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true - same instance

// 2. Factory Pattern
interface Product {
  name: string;
  price: number;
  display(): void;
}

class Book implements Product {
  constructor(public name: string, public price: number, public author: string) {}

  display(): void {
    console.log(`Book: ${this.name} by ${this.author} - $${this.price}`);
  }
}

class Electronics implements Product {
  constructor(public name: string, public price: number, public warranty: number) {}

  display(): void {
    console.log(`Electronics: ${this.name} - $${this.price} (${this.warranty} year warranty)`);
  }
}

class ProductFactory {
  static createProduct(type: "book" | "electronics", data: any): Product {
    switch (type) {
      case "book":
        return new Book(data.name, data.price, data.author);
      case "electronics":
        return new Electronics(data.name, data.price, data.warranty);
    }
  }
}

const book = ProductFactory.createProduct("book", { 
  name: "TypeScript Guide", 
  price: 29.99, 
  author: "John Doe" 
});

const laptop = ProductFactory.createProduct("electronics", { 
  name: "Laptop", 
  price: 999.99, 
  warranty: 2 
});

book.display();
laptop.display();

// 3. Observer Pattern
interface Observer {
  update(data: any): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class NewsPublisher implements Subject {
  private observers: Observer[] = [];
  private latestNews: string = "";

  attach(observer: Observer): void {
    this.observers.push(observer);
    console.log("Observer attached");
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      console.log("Observer detached");
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.latestNews);
    }
  }

  publishNews(news: string): void {
    this.latestNews = news;
    console.log(`\nPublishing: ${news}`);
    this.notify();
  }
}

class NewsSubscriber implements Observer {
  constructor(private name: string) {}

  update(news: string): void {
    console.log(`${this.name} received news: ${news}`);
  }
}

const publisher = new NewsPublisher();
const subscriber1 = new NewsSubscriber("Alice");
const subscriber2 = new NewsSubscriber("Bob");

publisher.attach(subscriber1);
publisher.attach(subscriber2);
publisher.publishNews("TypeScript 5.0 Released!");

// 4. Strategy Pattern
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card ending in ${this.cardNumber.slice(-4)}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal account ${this.email}`);
  }
}

class CryptoPayment implements PaymentStrategy {
  constructor(private walletAddress: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} using Crypto wallet ${this.walletAddress.slice(0, 8)}...`);
  }
}

class ShoppingCart {
  private items: string[] = [];
  private total: number = 0;
  private paymentStrategy?: PaymentStrategy;

  addItem(item: string, price: number): void {
    this.items.push(item);
    this.total += price;
    console.log(`Added ${item} ($${price}) to cart`);
  }

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(): void {
    if (!this.paymentStrategy) {
      console.log("Please select a payment method");
      return;
    }
    console.log(`\nChecking out ${this.items.length} items, total: $${this.total}`);
    this.paymentStrategy.pay(this.total);
  }
}

const cart = new ShoppingCart();
cart.addItem("Laptop", 999.99);
cart.addItem("Mouse", 29.99);

console.log("\nPaying with Credit Card:");
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout();

// 5. Decorator Pattern
interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return "Simple coffee";
  }
}

class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ", milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.5;
  }

  description(): string {
    return this.coffee.description() + ", sugar";
  }
}

let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.description()}: $${coffee.cost()}`);

coffee = new MilkDecorator(coffee);
console.log(`${coffee.description()}: $${coffee.cost()}`);

coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()}: $${coffee.cost()}`);

export { 
  DatabaseConnection, 
  ProductFactory, 
  NewsPublisher, 
  NewsSubscriber, 
  ShoppingCart, 
  CreditCardPayment, 
  PayPalPayment,
  SimpleCoffee,
  MilkDecorator,
  SugarDecorator
};
