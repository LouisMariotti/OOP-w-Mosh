// OOP Part 1

// https://www.youtube.com/watch?v=PFmuCDHHpwk&t=533s

// Objects Litteral

/* An object in javascript is essentially a collection of key value pairs
 */

// FIRST EXAMPLE WITH LITTERAL SYNTAX

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();

/* This circle obkect has 3 members, draw is a method, other are properties
Property is used to hold values, function or method used to define some logic
Can acces members of the circle objects using the dot notation, Canalso define 
objects using factories and constructors */

// Factories

/* We want to create another circle. With the current implementation we have to 
duplicate all the code above, can be a problem, we can have bugs. Object litteral
syntax isn't a good way to create an object and duplicate if it has at least one
methods. If an object has one or more methods we say that object has behaviour
Creating objects with litteral syntax is a problem only if that object has behaviour
The solution is to use a factory or constructor function, see bellow*/

// SECOND EXAMPLE WITH CONSTRUCTORS AND FACTORIES

// This bellow is a factory function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1); // 1 correspond to the radius

/* About the above: Don't need to declare a const, just need
to return. Put radius has parameter so we can clear a bit our code
 */

// Constructor

/* The convention we use for a constructor function is different,
constructor functions starts with a uppercase. Use of the this keyword to set
the properties of this object. This is a reference to the object that is executing
this piece of code. Imagine we have an empty object in memory, going to use this
to set the object and then use dot notation to set various properties, we can set 
radius property to this radius argument, can also define other properties or
methods. We can in our bellow example create a new circle*/

function Circle(radius) {
  //   console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

/* This new operator will create an empty object, then it will set this to 
point to that object because by default this points to the global objects
The global object is the window object. We don't want to use, declare global 
variables, When use the new operator to call a function, three things happen
1- new operator will create an empty object
2- will set this to point to that object
3- will return that object from this function, here function Circle
We don't have an explicit return statement*/

/* So 2 ways of creating an object, we can use factoru function or constructor
Can use both */
