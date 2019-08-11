console.log(" Array Recaps -----------------")
// Array Recap

var names = ['John', 'Jane', 'Judy', 'Joe', 'Jack', 'Jessie', 'Julie'];

console.log(" Iteration ")

for(var i = 0; i < names.length; i++){
    console.log( i + " -> " + names[i])
}

var mixedArray = ["cartoon", 134, true, { age : 20}, [ "dog", "owl"], "pet", "23423"]

console.log(" Access string values only ")
for(var i = 0; i < mixedArray.length; i++){
    if(typeof mixedArray[i] === 'string')
        console.log( i + " -> " + mixedArray[i], typeof mixedArray[i])
}

console.log(" Array Methods -----------------> ")
// pop, push 
var numberArray = [1,2,3,4,5,23,78]
console.log(numberArray)
var lastNumber = numberArray.pop();
console.log("lastnumber : pop", lastNumber)
console.log(numberArray)
var newLength = numberArray.push(543);
console.log("pushnumber : push ", newLength)
console.log(numberArray);

console.log(" Array -> shift, unshift ")
// shift 
var firstElement = numberArray.shift();
console.log(firstElement, numberArray)

// unshift 
var firstElement = numberArray.unshift(0.5);
console.log(firstElement, numberArray)


// Summary of Array methods 
/**
 * 
 * pop : remove last element of array and return value 
 * push : add element end of array and reurn array new length 
 * shift : remove first element of array and return value 
 * unshift : add new element of array and return array new length 
 * 
 */