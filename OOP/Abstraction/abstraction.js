// Abstract class
abstract class Animal {
    constructor(name) {
      this.name = name;
    }
  
    abstract makeSound();
  
    speak() {
      console.log(`${this.name} says ${this.makeSound()}`);
    }
  }
  
  // Concrete class
  class Dog extends Animal {
    makeSound() {
      return 'Woof!';
    }
  }
  
  // Concrete class
  class Cat extends Animal {
    makeSound() {
      return 'Meow!';
    }
  }
  
  // Create instances of the concrete classes
  const dog = new Dog('Sparky');
  const cat = new Cat('Mittens');
  
  // Call the speak() method on each instance
  dog.speak(); // "Sparky says Woof!"
  cat.speak(); // "Mittens says Meow!