

# Animal Classification System

## Replit link for the project

[Click here view and run on replit ..](https://replit.com/@uchesolomon61/AnimalClassificationTask5#index.js)

This is a simple JavaScript code implementing an Animal Classification System. The system categorizes animals into two main groups: Vertebrates and Invertebrates. Each group has specific subclasses with unique properties and behaviors.

## Classes and Subclasses

### Animal (Base Class)

- **Properties:**
  - `_name`: The name of the animal.
  - `_habitat`: The habitat where the animal lives.
  - `_lifespan`: The average lifespan of the animal.

- **Methods:**
  - `displayName()`: Returns the formatted name of the animal.
  - `displayHabitat()`: Returns information about the habitat.
  - `displayLifespan()`: Returns the average lifespan of the animal.
  - `makeSound()`: Abstract method that must be implemented by subclasses.
  - `move()`: Represents the movement of the animal.
  - `_privateMethod()`: Private method in the Animal class.

### Vertebrate (Subclass of Animal)

- **Additional Properties:**
  - `_hasBackbone`: Indicates if the vertebrate has a backbone.
  - `_warmBlooded`: Indicates if the vertebrate is warm-blooded.
  - `_vertebrateType`: Represents the type of vertebrate.

- **Methods:**
  - `displayVertebrateType()`: Returns the type of vertebrate.
  - `move()`: Overrides the move method to describe vertebrate movement.

### Invertebrate (Subclass of Animal)

- **Additional Properties:**
  - `_hasBackbone`: Indicates if the invertebrate has a backbone.
  - `_warmBlooded`: Indicates if the invertebrate is warm-blooded.
  - `_invertebrateType`: Represents the type of invertebrate.

- **Methods:**
  - `displayInvertebrateType()`: Returns the type of invertebrate.
  - `move()`: Overrides the move method to describe invertebrate movement.

### Arthropoda, Fish, Amphibia, Reptile, Aves (Subclasses of Vertebrate)

- **Additional Properties and Methods:**
  - Specific properties and behaviors for each vertebrate subclass.

### Mammal (Subclass of Vertebrate)

- **Additional Properties and Methods:**
  - `_mammalType`: Represents the type of mammal.
  - `displayMammalType()`: Returns the type of mammal.

## Example Usage

```javascript
// Creating an instance of the Mammal class
const dog = new Mammal('Dog', 'Land', 12, 'Domestic');

// Logging information to the console
console.log(dog.displayName());
console.log(dog.displayHabitat());
console.log(dog.displayLifespan());
console.log(dog.move());
console.log(dog.displayMammalType());
console.log(dog.displayVertebrateType()); // Calls the private method in the Animal class
