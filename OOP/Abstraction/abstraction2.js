// Abstract class
 class Shape {
    constructor(name) {
      this.name = name;
    }
  
    // abstract getArea();
     getArea(){
        return 0
     };
  
    getPerimeter() {
      return 2 * this.getArea();
    }
  }
  
  // Concrete class
  class Circle extends Shape {
    constructor(radius) {
      super('Circle');
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Concrete class
  class Square extends Shape {
    constructor(sideLength) {
      super('Square');
      this.sideLength = sideLength;
    }
  
    getArea() {
      return this.sideLength * this.sideLength;
    }
  }
  
  // Create instances of the concrete classes
  const circle = new Circle(10);
  const square = new Square(5);
  
  // Print the area and perimeter of each shape
  console.log(`The area of the circle is ${circle.getArea()} and the perimeter is ${circle.getPerimeter()}.`);
  console.log(`The area of the square is ${square.getArea()} and the perimeter is ${square.getPerimeter()}.`);