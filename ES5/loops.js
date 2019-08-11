console.log('--- for loops ----------------------------------------------')
// Section 02 : loops 

// for loops 
/**
 * for(initial expression, condition, incrementing expression) {
 *    // do something here      
 * }
 */

var animalStringArray = ["dog", "cat", "owl"];

// count up 
console.log(" -- Count Up -- ")
for(var i = 0; i < animalStringArray.length; i++){

    console.log(i, " -> ", animalStringArray[i])
}

// count down 
console.log(" -- Count Down -- ")
for(var j = animalStringArray.length - 1 ; j >= 0; j--){
    console.log(j, " -> ", animalStringArray[j])
}

// for ... in loops 
/**
 * for(var prop in obj) {
 *  // do something here 
 * }
 */ 

console.log('-- for..in loop use to object --')
var myWidget = {
    company: "ABC PQR", unitsSold: 300, isFlag: false
}

for(var prop in myWidget){
    console.log(prop , " -> ", myWidget[prop])
}
console.log('-- for..in loop use to array ')
for(var prop1 in animalStringArray){

    console.log(prop1 + " -> " + animalStringArray[prop1])
}

console.log('--- while loops ----------------------------------------------')
// while loops
/**
 * NOTE : continue to run until a condition is false 
 * while(condition) {
 *  // do something 
 * }
 */

var t = 1;
while(t <= 3){
    console.log('Line ' + t);
    t++;
}

console.log('--- do while loops ----------------------------------------------')
// do while loops 
/**
 * do {
 *  // do something
 * } while(condition)
 */

 var userArray = [ "john", "jane", "loan"]

 console.log(" ex : 01")
 var i = 0; 
 do {
    console.log(i + " -> " + userArray[i])
    i++;
 } while(i < userArray.length)

 console.log(" ex : 02")
 var j = 0; 
 do {
    j++
    console.log(j + " -> " + userArray[j]);
 } while(j < userArray.length)

