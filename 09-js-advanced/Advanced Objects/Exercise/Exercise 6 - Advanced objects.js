//Evaluate these:
//#1
[2] === [2] 
// No clue, dont have the original array?
// false
{} === {}
// Proabably false, two empty objects but objects are kinda unique?
// False

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
// 5
const object2 = object1; 
// 5
const object3 = object2; 
// 5
const object4 = { a: 5}; 
// 5
object1.a = 4;
// object1, object2 and object3 would now have 4 as a value
// Correct, depending on where they are evaluated value would start as 5 and then cahnge to 4 when original object changes


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  greeting() {
    console.log(`Moooooo, my is ${this.name}, I am a ${this.type} cow and I am ${this.color} colour.`)
  }
}

const cow = new Mammal("Daisy", "Dairy", "Black and White");

//Correct, did not extend animal class with mammal though, instructions were not really clear that was needed, rest is fine though