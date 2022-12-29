//JavaScript Operators
//Assignment (=) Operator

/*let x = 5;
let y = 2;
let z = x + y;
alert(z);*/

/*let a = 3;
let x = (100 + 50) * a;
alert(x)*/

/*var x = 10;
x += 5;
alert(x)*/

/*let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
alert(text3);*/

/*let text1 = "What a very ";
text1 += "nice day";
alert(text1);*/


/*let y = "5" + 5;
alert(y);
let z = "Hello" + 5;
alert(z);*/


/*let x = 5;
let y = 2;
let z = x % y;
alert(z);*/

/*let x = 10;
x **= 3;
alert(x);*/

//Bitwise OR Assignment
/*let x = 100;
x |= 5;
alert(x);*/

//Bitwise XOR Assignment Operator
/*let x = 100;
x ^= 5;
alert(x);*/

//Logical AND assignment operator
/*let x = 100;
x &&= 5;
alert(x);*/

//Logical OR assignment operator
/*let x = 10;
x ||= 5;
alert(x);*/


/*let x = 16 + 4 + "Volvo";
alert(x);*/

/*let x = "Volvo" + 16 + 4;
alert(x);*/

//JavaScript Booleans
/*let x = false;
alert(x);*/


//if else loop
/*const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert(greeting);*/



//switch loop
/*let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
alert(day);*/


//FOR LOOP
/*const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "\n";
}
alert(text);*/

/*let text = "";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}
alert(text);*/

//For In Loop
/*const person = {fname:"John", lname:"Doe", age:25}; 
let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
alert(txt);*/


//For Of Loop
/*const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "\n";
}
alert(text);*/


//While Loop
/*let text = "";
let i = 0;
while (i < 10) {
  text += "\n The number is " + i;
  i++;
}
alert(text);*/


//Do While Loop
/*let text = ""
let i = 0;

do {
  text += "\n The number is " + i;
  i++;
}
while (i < 10); 
alert(text);*/



//Local variables
// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
  
//     alert( message );
//   }
  
//   showMessage();


//Outer variables
// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage(); 
  


// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; 

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); 
// showMessage();
// alert( userName );

// Functions
// function myFunction(p1, p2) {
//     return p1 * p2;
//   }
//   alert(myFunction(4,3));


// function myFunction(a, b) {
//     return a * b;
// }

// var x = myFunction(4, 3);
// alert(x);


// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
//   alert(toCelsius(77));


// Create an Array:
// const cars = ["Saab", "Volvo", "BMW"];

//     cars[0] = "Toyota";

//     cars.push("Audi");
//     alert(cars);


//Arrow Function
// let myFunction = (a, b) => a * b;
// alert(myFunction(4, 5));

//Arrow Function
let hello = "";
hello = () => {
  return "Hello World!";
}
alert(hello());
