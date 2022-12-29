// Object Properties
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };
  
// console.log(person.firstname + " is " + person.age + " years old.");


// Looping object property 
// const person = {
//     fname:"John",
//     lname:"Doe",
//     age:25
//   }; 
  
//   let txt = "";
//   for (let x in person) {
//     txt += person[x] + " ";
//   }
//   console.log(txt);


// Adding New Properties
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };
  
//   person.nationality = "English";
//   console.log(person.firstname + " is " + person.nationality + ".");


// Deleting Properties
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };
  
//   delete person.age;
  
//   console.log(person.firstname + " is " + person.age + " years old.");

//Nested Objects
// const myObj = {
//     name: "John",
//     age: 30,
//     cars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat"
//     }
//   }
//   console.log(myObj.cars.car2);


//Nested Arrays and Objects
// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// for (let i in myObj.cars) {
//   x +=  myObj.cars[i].name;
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "\n";
//   }
// }

// console.log(x);


//JavaScript Object Methods
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
//   // Display data from the object:
//   console.log(person.fullName());



//Adding a Method to an Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//   };
//   person.name = function() {
//     return this.firstName + " " + this.lastName;
//   };
  
//   console.log("My father is " + person.name());


//Displaying the Object in a Loop

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   let txt = "";
//   for (let x in person) {
//     txt += person[x] + " ";
//   };
//   console.log(txt);



// Display properties in JSON format:
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   console.log(JSON.stringify(person));


//Stringify Dates
// var person = {
//     name: "John",
//     today: new Date()
//   };
  
// console.log(JSON.stringify(person));


//Stringify Arrays
// const arr = ["John", "Peter", "Sally", "Jane"];
// console.log(JSON.stringify(arr));


//JavaScript Object Accessors
//JavaScript Getter
// Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
//   };
  
//   // Display data from the object using a getter:
//   console.log(person.lang);


//JavaScript Setter
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "NO",
//     set lang(value) {
//       this.language = value;
//     }
//   };
  
//   // Set a property using set:
//   person.lang = "en";

//   console.log(person.language);


// Display data from the object using a getter:
// Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     get fullName() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
 
//  console.log(person.fullName);



//
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) {
//       this.language = lang.toUpperCase();
//     }
//   };
  
//   // Set a property using set:
//   person.lang = "en";

//   console.log(person.language);



//JavaScript Getters and Setters
//Perfect for creating counters:
// const obj = {counter : 0};

// // Define Setters and Getters
// Object.defineProperty(obj, "reset", {
//   get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj, "increment", {
//   get : function () {this.counter++;}
// });
// Object.defineProperty(obj, "decrement", {
//   get : function () {this.counter--;}
// });
// Object.defineProperty(obj, "add", {
//   set : function (value) {this.counter += value;}
// });
// Object.defineProperty(obj, "subtract", {
//   set : function (value) {this.counter -= value;}
// });

// // Play with counter:
// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;
// console.log(obj.counter);




//JavaScript Object Constructors
// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");
  
//   console.log("My father is " + myFather.age + ".");



// Adding a Method to an Object
// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   // Create 2 Person objects
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
  
//   // Add a name method to first object
//   myFather.name = function() {
//     return this.firstName + " " + this.lastName;
//   };
  
//   // Display full name
//   console.log("My father is " + myFather.name()); 




//JavaScript Iterables
// Create a String
// const name = "W3Schools";

// // List all Elements
// let text = ""
// for (const x of name) {
//   text += x + "\n";
// }

// console.log(text);



//Home Made Iterable
// function myNumbers() {
//     let n = 0;
//     return {
//       next: function() {
//         n += 10;
//         return {value:n, done:false};
//       }
//     };
//   }
  
//   // Create Iterable
//   const n = myNumbers();
//   n.next(); // 10
//   n.next(); // 20
//   n.next(); // 30
  
//   console.log(n.next().value);


  //JavaScript Sets
  // Create a Set
// const letters = new Set(["a","b","c"]);

// console.log(letters.size);


//Create a Set and add variables:
// Create a Set
// const letters = new Set();

// // Create Variables
// const a = "a";
// const b = "b";
// const c = "c";

// // Add the Variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);

// console.log(letters.size);



//forEach() method invokes a function for each Set element:
// Create a Set
// const letters = new Set(["a","b","c"]);

// // List all Elements
// let text = "";
// letters.forEach (function(value) {
//   text += value + "\n";
// })

// console.log(text);



// const letters = new Set(["a","b","c"]);
// // List all entries
// const iterator = letters.entries();
// let text = "";
// for (const entry of iterator) {
//   text += entry + "\n";
// }
// console.log(text);



//Map Methods
// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
//   console.log(fruits.get("apples"));


// Map.set()
// const fruits = new Map();
// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits.get("apples"));


//Map.delete()
// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
//   // Delete an Element
//   fruits.delete("apples");
  
//   console.log(fruits.size);



//Map.forEach()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  fruits.forEach (function(value, key) {
    text += key + ' = ' + value + "\n"
  })
  
 console.log(text);