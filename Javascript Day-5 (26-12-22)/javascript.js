// JavaScript Class

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
  
//   const myCar = new Car("Ford", 2014);
//   console.log(myCar.name + " " + myCar.year);


//JavaScript Class Method
// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age(x) {
//       return x - this.year;
//     }
//   }
  
//   let date = new Date();
//   let year = date.getFullYear();
  
//   let myCar = new Car("Ford", 2014);
//   console.log("My car is " + myCar.age(year) + " years old.");


//use strict
// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
  
//     }
//     age() {
//      let date = new Date(); // This will work
//      return date.getFullYear() - this.year;
//     }
//   }
  
//   myCar = new Car("Ford", 2014);
//   console.log("My car is " + myCar.age() + " years old.");


//JavaScript Class Inheritance
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang");
//   console.log(myCar.show());


//add getters and setters in a class
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     get cnam() {
//       return this.carname;
//     }
//     set cnam(x) {
//       this.carname = x;
//     }
//   }
  
//   let myCar = new Car("Ford");
  
//   console.log(myCar.cnam);


//JavaScript Class Setter
// class Car {
//     constructor(brand) {
//       this._carname = brand;
//     }
//     set carname(x) {
//       this._carname = x;
//     }
//     get carname() {
//       return this._carname;
//     }
//   }
  
//   let myCar = new Car("Ford");
//   myCar.carname = "Volvo";
//   console.log(myCar.carname);


// JavaScript Class Static Methods
// class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello() {
//       return "Hello!!";
//     }
//   }
  
//   let myCar = new Car("Ford");
  
//   //You can call 'hello()' on the Car Class:
//   console.log(Car.hello());


//
// class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello(x) {
//       return "Hello " + x.name;
//     }
//   }
  
//   let myCar = new Car("Ford");
//   console.log(Car.hello(myCar));


//JavaScript Modules

// let text = "My name is " + name + ", I am " + age + ".";
// console.log(text);


// Syntax Error
// try {
//     eval("alert('Hello)");
// }
// catch(err) {
//   console.log(err.name);
// }


// Type Error
// let num = 1;
// try {
//   num.toUpperCase();
// }
// catch(err) {
//   console.log(err.name);
// }


//URI Error
// try {
//     decodeURI("%%%");
//   }
//   catch(err) {
//     console.log(err.name);
//   }


// javascript overriding
function addNumbers(n1, n2, n3) {
    return n1 + n2 + n3;
}

function addNumbers(n1, n2) {
    return n1 + n2;
}

var sum = addNumbers(1, 2, 3);
console.log(sum);
  

  