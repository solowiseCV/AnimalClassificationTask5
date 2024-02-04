// Base class - Animal
class Animal {
    constructor(name, habitat, lifespan) {
      // Private properties
      this._name = name;
      this._habitat = habitat;
      this._lifespan = lifespan;
    }
  
    // Public method for displaying the animal's name
    displayName() {
      return `Animal: ${this._name}`;
    }
  
    // Public method for displaying habitat
    displayHabitat() {
      return `Habitat: ${this._habitat}`;
    }
  
    // Public method for displaying lifespan
    displayLifespan() {
      return `Lifespan: ${this._lifespan} years`;
    }
  
    // Abstraction - this method must be implemented by subclasses
    makeSound() {
      // Abstract method
      throw new Error('Abstract method makeSound must be implemented by subclasses');
    }
  
    // Method to represent animal movement
    move() {
      return 'The animal moves.';
    }
  
    // Private method in the Animal class
    _privateMethod() {
      return 'This is a private method of Animal.';
    }
  }
  
  // Subclass for vertebrates
  class Vertebrate extends Animal {
    constructor(name, habitat, lifespan) {
      super(name, habitat, lifespan);
      // Vertebrates have a backbone
      this._hasBackbone = true;
      // Default values for vertebrate properties
      this._warmBlooded = false;
      this._vertebrateType = 'Generic Vertebrate';
    }
  
    // Public method to display vertebrate type
    displayVertebrateType() {
      // Calling the private method in the Animal class
      console.log(this._privateMethod());
      return `Vertebrate Type: ${this._vertebrateType}`;
    }
  
    // Overriding move method for vertebrates
    move() {
      return 'The vertebrate moves.';
    }
  }
  
  // Subclass for invertebrates
  class Invertebrate extends Animal {
    constructor(name, habitat, lifespan) {
      super(name, habitat, lifespan);
      // Invertebrates do not have a backbone
      this._hasBackbone = false;
      // Default values for invertebrate properties
      this._warmBlooded = false;
      this._invertebrateType = 'Generic Invertebrate';
    }
  
    // Public method to display invertebrate type
    displayInvertebrateType() {
      // Calling the private method in the Animal class
      console.log(this._privateMethod());
      return `Invertebrate Type: ${this._invertebrateType}`;
    }
  
    // Overriding move method for invertebrates
    move() {
      return 'The invertebrate moves.';
    }
  }
  
  // Subclass for arthropods
  class Arthropoda extends Invertebrate {
    constructor(name, habitat, lifespan, numberOfLegs) {
      super(name, habitat, lifespan);
      // Additional property for arthropods
      this._numberOfLegs = numberOfLegs;
    }
  
    // Polymorphism - overriding the makeSound method
    makeSound() {
      return 'Making arthropod sounds';
    }
  
    // Public method to display number of legs
    displayNumberOfLegs() {
      return `Number of Legs: ${this._numberOfLegs}`;
    }
  
    // Overriding move method for arthropods
    move() {
      return 'The arthropod crawls or scuttles.';
    }
  }
  
  // Subclass for fish
  class Fish extends Vertebrate {
    constructor(name, habitat, lifespan, waterType) {
      super(name, habitat, lifespan);
      // Additional property for fish
      this._waterType = waterType;
    }
  
    // Polymorphism - overriding the makeSound method
    makeSound() {
      return 'Making fish sounds';
    }
  
    // Public method to display water type
    displayWaterType() {
      return `Water Type: ${this._waterType}`;
    }
  
    // Overriding move method for fish
    move() {
      return 'The fish swims.';
    }
  }
  
  // Subclass for amphibians
  class Amphibia extends Vertebrate {
    constructor(name, habitat, lifespan) {
      super(name, habitat, lifespan);
    }
  
    // Polymorphism - overriding the makeSound method
    makeSound() {
      return 'Making amphibian sounds';
    }
  
    // Overriding move method for amphibians
    move() {
      return 'The amphibian moves through water and on land.';
    }
  }
  
  // Subclass for reptiles
  class Reptile extends Vertebrate {
    constructor(name, habitat, lifespan) {
      super(name, habitat, lifespan);
    }
  
    // Polymorphism - overriding the makeSound method
    makeSound() {
      return 'Making reptile sounds';
    }
  
    // Overriding move method for reptiles
    move() {
      return 'The reptile crawls or slithers.';
    }
  }
  
  // Subclass for birds (Aves)
  class Aves extends Vertebrate {
    constructor(name, habitat, lifespan, canFly) {
      super(name, habitat, lifespan);
      // Additional property for birds
      this._canFly = canFly;
    }
  
    // Polymorphism - overriding the makeSound method
    makeSound() {
      return 'Making bird sounds';
    }
  
    // Public method to display flight capability
    displayFlightCapability() {
      return `Can Fly: ${this._canFly ? 'Yes' : 'No'}`;
    }
  
    // Overriding move method for birds
    move() {
      return this._canFly ? 'The bird flies.' : 'The bird hops or walks.';
    }
  }
  
  // Subclass for mammals
  class Mammal extends Vertebrate {
    constructor(name, habitat, lifespan, mammalType) {
      super(name, habitat, lifespan);
      // Additional property for mammals
      this._mammalType = mammalType;
    }
  
    // Polymorphism - overriding the makeSound method
    makeSound() {
      return 'Making mammal sounds';
    }
  
    // Public method to display mammal type
    displayMammalType() {
      // Calling the private method in the Animal class
      console.log(this._privateMethod());
      return `Mammal Type: ${this._mammalType}`;
    }
  
    // Overriding move method for mammals
    move() {
      return 'The mammal walks or runs.';
    }
  }
  
  // Example usage:
  
  // Creating an instance of the Mammal class
  const dog = new Mammal('Dog', 'Land', 12, 'Domestic');
  
  // Logging information to the console
  console.log(dog.displayName());
  console.log(dog.displayHabitat());
  console.log(dog.displayLifespan());
  console.log(dog.move());
  console.log(dog.displayMammalType());
  console.log(dog.displayVertebrateType()); // Calls the private method in the Animal class
  