/**
 * What is Prototype: 
 * 
 * 
 * 
 * **/ 



// Creating a parent object as a prototype
const parent = {
    greet: function() {
      console.log(`Hello from the parent`);
    }
  };
  
  // Creating a child object
  const child = {
    name: 'Child Object'
  };
  
  // Performing prototype inheritance
  child.__proto__ = parent;
  
  // Accessing the method from the parent prototype
  child.greet(); // Outputs: Hello from the parent 



//   ###################################################

function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
  };
  const animal = new Animal('Generic Animal');
  animal.speak(); // Output: Generic Animal makes a sound.

  
  function Dog(name, breed) {
    Animal.call(this, name); // Call the Animal constructor with the Dog context
    this.breed = breed;
  }
  
  // Set the prototype of Dog to be an instance of Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog; // Correct the constructor property
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
  };
  
  const dog = new Dog('Rex', 'German Shepherd');
  dog.speak(); // Output: Rex makes a sound.
  dog.bark();  // Output: Rex barks.

  
  const anotherDog = new Dog('Buddy', 'Golden Retriever');
  anotherDog.speak(); // Output: Buddy makes a sound.
  anotherDog.bark();  // Output: Buddy barks.
    

  

