// Week 3 Exercises: Object-Oriented Programming

/* 
  EXERCISE 1: Basic Class
  ─────────────────────────────────────────────────────────
  Create a class 'Student' with:
  - Properties: name (string), grade (number), courses (string array)
  - Constructor to initialize all properties
  - Method addCourse(course: string): void - adds a course to the array
  - Method getGPA(): string - returns the grade as a letter (A, B, C, D, F)
    90-100: A, 80-89: B, 70-79: C, 60-69: D, below 60: F
  
  Create at least 2 student instances and test the methods
*/

// TODO: Write your code here


/* 
  EXERCISE 2: Inheritance
  ─────────────────────────────────────────────────────────
  Create a base class 'Vehicle' with:
  - Properties: make (string), model (string), year (number)
  - Method displayInfo(): void - logs the vehicle information
  
  Create a derived class 'Car' that extends Vehicle and adds:
  - Property: numberOfDoors (number)
  - Override displayInfo() to include number of doors
  
  Create a derived class 'Motorcycle' that extends Vehicle and adds:
  - Property: hasStorage (boolean)
  - Override displayInfo() to include storage information
  
  Create instances of both Car and Motorcycle
*/

// TODO: Write your code here


/* 
  EXERCISE 3: Access Modifiers
  ─────────────────────────────────────────────────────────
  Create a class 'BankAccount' with:
  - Private property: balance (number)
  - Protected property: accountNumber (string)
  - Public property: ownerName (string)
  - Constructor to initialize all properties
  - Public method deposit(amount: number): void
  - Public method withdraw(amount: number): boolean
  - Public method getBalance(): number
  
  Ensure balance can only be modified through deposit and withdraw
*/

// TODO: Write your code here


/* 
  EXERCISE 4: Abstract Class and Design Pattern
  ─────────────────────────────────────────────────────────
  Create an abstract class 'Notification' with:
  - Abstract method send(message: string): void
  - Method formatMessage(message: string): string - adds timestamp
  
  Create two concrete classes:
  - EmailNotification extends Notification
  - SMSNotification extends Notification
  
  Implement the send method differently in each class
  (just console.log for demonstration)
*/

// TODO: Write your code here


/* 
  EXERCISE 5: Challenge - Library System
  ─────────────────────────────────────────────────────────
  Create a Library management system with:
  
  1. Interface 'LibraryItem' with:
     - id (number)
     - title (string)
     - isAvailable (boolean)
  
  2. Class 'Book' implements LibraryItem and adds:
     - author (string)
     - isbn (string)
  
  3. Class 'Magazine' implements LibraryItem and adds:
     - issueNumber (number)
     - month (string)
  
  4. Class 'Library' with:
     - Private array of LibraryItem
     - Method addItem(item: LibraryItem): void
     - Method findById(id: number): LibraryItem | undefined
     - Method checkOut(id: number): boolean - marks item as not available
     - Method returnItem(id: number): boolean - marks item as available
     - Method listAvailableItems(): LibraryItem[]
  
  Create a library instance and test all methods
*/

// TODO: Write your code here


// Export your solutions (uncomment when ready)
// export {};
