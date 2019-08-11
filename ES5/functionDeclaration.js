// Javscript Functions 
console.log(' JS : Functions ')



// anonymous function 
var myFunction = function() {
    // do something 
    console.log(" Inside My Functions :) ")
}

// name function 
var myRefereranceVariable = function myFunction2() {
    // do something here 
    console.log(" Inside My 2 Function :) :) ")
}

myFunction();
myRefereranceVariable();
// myFunction2(); // You can't access this 


var my3Function = function() {
    console.log(" Fun 03")
}
my3Function()

function my4Function() {
    console.log(" Fun 04")
}
my4Function();


// my5Function() // You can't call here
var my5Function = function() {
    console.log(" Fun 05")
}

// my5Function() // You can call here

my6Function()
function my6Function() {
    console.log(" Fun 06")
}


// Recursion Function 
console.log(" Recursion Function :: ")

function factorial(num) {
    if(num < 0){
        return -1;
    }else if(num === 0){
        return 1;
    }
    var total = 1;
    for(var i = 1; i <= num; i++){
        total *= i; // total = total * i 
    }
    return total;

}

console.log(" Factorial Function " + factorial(4))

function rFactorial(num) {
    if(num < 0){
        return -1
    }
    if(num === 1){
        return 1;
    }
    return rFactorial(num - 1) * num;
}

console.log(" Recursive Factorial Function ", rFactorial(4))

console.log(" Closures :: ")
// Simple Definition of a closures is a function within a function 
// Note : inner function can access outer function variable and parameters 

function displayWelcomeMessage(firstName, lastName){
    function fullName() {
        return firstName + " " + lastName
    }
    return 'Welcome Back ' + fullName() + " ... !"
}

console.log(displayWelcomeMessage("Amila", "Sampath"))

// displayWelcomeMessage.fullName("Amila", "Sampath")  // You can't call this 

// Standard function
function foo() {
    // do something
    console.log(" Do something food ")
  }
  foo(); // Need to call the function to use it
  
  // Immediately Invoked Function Expression
  (function() {
      // do something right now
      console.log(" Immediately Call Functions :) ")
  })(); // anonymous IIFE - the code inside is executed immediately (no need to call it later