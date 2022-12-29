// JavaScript Callbacks
// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();


// Sequence Control
// document.write("The result of the calculation is:");
// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);



//
// function myDisplayer(something) {
//     console.log(something);
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);


//
// Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a Callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// console.log(posNumbers);

// // Remove negative numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }


// Waiting for a Timeout in javascript
// setTimeout(myFunction, 3000);

// function myFunction() {
//   console.log("Good Morning !!");
// }


// setInterval() with a Callback
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds());
// }


// JavaScript Promise
// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


// Waiting for a Timeout in promise example
// const myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function(){ myResolve("Good Morning !!"); }, 3000);
//   });
  
//   myPromise.then(function(value) {
//     console.log(value);
//   });


// JavaScript async / await
// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   async function myFunction() {return "Hello";}
  
//   myFunction().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


//
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("Good Morning !!");
    });
    console.log(await myPromise);
  }
  
  myDisplay();