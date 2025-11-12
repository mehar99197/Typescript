// Week 3: Object-Oriented Programming - Day 1: Classes and Inheritance

// 1. Basic Class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person("Alice", 25);
person.introduce();

// 2. Access Modifiers
class BankAccount {
  private balance: number;
  protected accountNumber: string;
  public owner: string;

  constructor(owner: string, accountNumber: string, initialBalance: number) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  }

  public withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      return true;
    }
    console.log("Insufficient funds");
    return false;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("John Doe", "123456", 1000);
account.deposit(500);
account.withdraw(200);
console.log(`Balance: $${account.getBalance()}`);

// 3. Readonly Properties
class Car {
  readonly vin: string;
  make: string;
  model: string;

  constructor(vin: string, make: string, model: string) {
    this.vin = vin;
    this.make = make;
    this.model = model;
  }

  displayInfo(): void {
    console.log(`${this.make} ${this.model} (VIN: ${this.vin})`);
  }
}

const car = new Car("ABC123XYZ", "Toyota", "Camry");
car.displayInfo();
// car.vin = "NEW_VIN"; // Error! Cannot assign to 'vin' because it is a read-only property

// 4. Inheritance
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Some generic sound");
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  makeSound(): void {
    console.log("Woof! Woof!");
  }

  fetch(): void {
    console.log(`${this.name} is fetching the ball!`);
  }
}

const dog = new Dog("Max", "Golden Retriever");
dog.makeSound();
dog.move(10);
dog.fetch();

// 5. Abstract Classes
abstract class Shape {
  constructor(public color: string) {}

  abstract getArea(): number;
  abstract getPerimeter(): number;

  displayInfo(): void {
    console.log(`Color: ${this.color}, Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
  }
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 10, 5);
circle.displayInfo();
rectangle.displayInfo();

// 6. Static Members
class MathHelper {
  static PI: number = 3.14159;

  static calculateCircleArea(radius: number): number {
    return this.PI * radius ** 2;
  }

  static max(...numbers: number[]): number {
    return Math.max(...numbers);
  }
}

console.log(`Circle area: ${MathHelper.calculateCircleArea(5)}`);
console.log(`Max value: ${MathHelper.max(10, 25, 5, 30, 15)}`);

// 7. Getters and Setters
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature cannot be below absolute zero");
    }
    this._celsius = value;
  }

  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }

  set fahrenheit(value: number) {
    this._celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(`${temp.celsius}°C = ${temp.fahrenheit}°F`);

temp.fahrenheit = 68;
console.log(`${temp.fahrenheit}°F = ${temp.celsius}°C`);

export { Person, BankAccount, Car, Animal, Dog, Shape, Circle, Rectangle, MathHelper, Temperature };
