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

  // inhetance class from Animal 

  class Rabbit extends Animal{
    
    hide() {
       return (`${this.name} hides!`);
      }


  }


  // show the results 

  const rabbit  = new Rabbit("White Rabbit");

  console.log("Rabbit ::",rabbit.hide());  // White Rabbit hides 


