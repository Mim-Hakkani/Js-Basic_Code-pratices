class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  
  }
  
  // inheritance class from Animal 
  
  class Rabbit extends Animal{
  
    constructor(name, color) {
      super(name);
      this.color = color;
    }
    
    hide() {
       return (`${this.name} hides!`);
    }
  }
  
  // show the results 
  
  const rabbit  = new Rabbit("White Rabbit", "white");
  
  console.log("Rabbit name ::", rabbit.name); // output: "White Rabbit"
  console.log("Rabbit color ::", rabbit.color); // output: "white"
  console.log("Rabbit hides ::", rabbit.hide()); // output: "White Rabbit hides!"
  

  /* 
  Note : if i want to added a new Class property then i want to use consructor .and in this code where i use inheretane then name property send in super class and another is added in assigned in constructor. 

     constructor(name, color) {
      super(name);  // go to the value in Animal Class 
      this.color = color; // Extra assin the value in Rabbit Class  
    }
    


  */