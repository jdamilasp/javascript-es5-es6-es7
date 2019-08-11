// Single Line Comment 

/**
 * Multiline Comment 
 */

console.log('--- Variable ----------------------------------------------')
// Section 01 : Variable and DataTypes 
// Declaring Variables 

var fristName = "Amila";
var age = 30;
var notInitialized;

// fristName, age, notInitialized 
console.log(fristName, age, notInitialized);
console.log(typeof fristName, typeof age, typeof notInitialized)

console.log('--- string ----------------------------------------------')
// Data Types 
/**
 * There are 6 data types 
 * 
 * String, Number, Boolean, Null, Undefined, Object 
 * 
 */

 // String 
 // typeof(string) -> string 
 var fristName = "Amila Sampath";
 var stringNumber = '123';
 var firstLetter = 'a';
 var unescapedContraction = "It's";
 var escapedContraction = 'it\s'

console.log(fristName, stringNumber, firstLetter, unescapedContraction, escapedContraction);
console.log(typeof fristName, typeof stringNumber, typeof unescapedContraction, typeof escapedContraction);

console.log('--- number ----------------------------------------------')
// Number 
// typeof(number) -> number 
var answer = 54;
var pi = 3.1415926;
var nothing = 0;
var negative = -234288732;

console.log(answer, pi, nothing, negative);
console.log(typeof answer, typeof pi, typeof nothing, typeof negative);

if(answer)
    console.log(answer)

if(pi)
    console.log(pi)
 
if(nothing){
    console.log(nothing)
}else{
    console.log("Nothing print in else : " + nothing)
}

if(negative)    // Negtive number print here 
    console.log(negative)

// string and number 
var stringNumber = '123';
var numberNumber = 300;
var number2Number = 500;

// number-number + string-number = string
var numberNumber_ADD_stringNumber = numberNumber + stringNumber;
console.log(numberNumber_ADD_stringNumber, typeof numberNumber_ADD_stringNumber);

var number_add_number = numberNumber + number2Number;
console.log(number_add_number, typeof number_add_number);

console.log('--- boolean ----------------------------------------------');
// boolean 
// typeof(boolean) -> boolean
var sampleTrueValue = true;
var sampleFalseValue = false;
var sample1TrueValue = 1;   // but type is number 
var sample2FalseValue = 0;  // but type is number 

console.log(sampleTrueValue, typeof sampleTrueValue);
console.log(sampleFalseValue, typeof sampleFalseValue);
console.log(sample1TrueValue, typeof sample1TrueValue);
console.log(sample2FalseValue, typeof sample2FalseValue);

console.log('--- null ----------------------------------------------');
// null 
/**
 * A variable assignmed a null value syas that the variable exists, but it explicitly has no value or type.
 * In Javascript, null has to be explicitly set to a variable
 * 
 * Note : typeof(null) return "object" 
 * 
 */
// typeof(null) -> object 
var nullValue = null;

console.log(nullValue, typeof nullValue);

console.log('--- Undefined ----------------------------------------------');
// undefined 
// typeof(undefined) -> undefined 
var notInitialized; 

console.log(notInitialized, typeof notInitialized);

console.log('--- Object ----------------------------------------------');
// object 
// typeof(object) -> object 
var emptyObject = {};
var student = {
    fristName: "Amila", lastName: "Sampath",
    age: 30, hassPassport: true,
    skill: ["nodejs", "es5", "es6" ]
}

console.log(emptyObject, typeof emptyObject);
console.log(student, typeof student);

if(emptyObject == {}){
    console.log("Empty Object == {}")
}else{
    console.log("Empty Object != {}")
}

// NOTE : typeof(student.fristName) -> string 
console.log(student.fristName, typeof student.fristName)

console.log('--- Array ----------------------------------------------');
// Array 
// typeof(Array) -> object 
/**
 * NOTE: Arary is epecial type of object 
 */

var emptyArray = [];
var stringArray = ["cat", "dog", "owl"];
var numberArray = [1,2,3,4,5]
var mixedArray = ["cartoon", 134, true, { age : 20}, [ "dog", "owl"] ]

console.log(emptyArray, typeof emptyArray);
console.log(stringArray, typeof stringArray);
console.log(numberArray, typeof numberArray);
console.log(mixedArray, typeof mixedArray);

console.log(emptyArray[0], typeof emptyArray[0])
console.log(stringArray[1], typeof stringArray[1])
console.log(numberArray[0], typeof numberArray[1])
console.log(mixedArray[3], typeof mixedArray[3])