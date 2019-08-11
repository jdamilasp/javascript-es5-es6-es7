// 1. const and let keywords 

function varAndConstAndLet() {

    var x = 1;
    let y = 2;
    const z = 3;
    {
        var x = 100;
        let y = 200;
        const z = 300;
        console.log('x inside of block scope is ', x)
        console.log('y inside of block scope is ', y)
        console.log('z inside of block scope is ', z)
    }
    console.log('x outside of block scope is ', x)
    console.log('y outside of block scope is ', y)
    console.log('z outside of block scope is ', z)


}

//console.log(" ES6 :: var let const -------------------------------------- ")
//varAndConstAndLet();

// 2. Array helper functions 

// foreach 
console.log(" ES6: ForEach ----------- ")
var colors = ['red', 'green', 'blue']
function print(val){
    console.log(val)
}
//colors.forEach(print)
let colorArray = ['red', 'green', 'blue', 'yellow'];
colorArray.forEach((val,i) => console.log(`${i} -> ${val}`) )

console.log(" ES6: Map ---------------- ")
function capitalized(val){
    return val.toUpperCase();
}
var capitalizedColors = colors.map(capitalized);
//console.log(capitalizedColors, colors)
const capColors = colorArray.map((val) => val.toUpperCase() )
console.log(`Capitalized Colors Array : [ ${capColors} ]`, colorArray)


console.log(' ES6: Filter ------------- ');
let valuesArray = [2,3,23,54,43,3]
function lessThan20(val){
    return val < 20;
}
let valueLessThan20 = valuesArray.filter(lessThan20);
//console.log(valueLessThan20)
let valLessThan20 = valuesArray.filter((val) => val < 20 )
console.log(`Value Less Than 20 [${valLessThan20}]`)


console.log(' ES6: Find ----------------');
const peoples = [{ name: "amila", age: 27}, {name: "sampath", age: 22}, {name: 'john', age: 25}]
// find people age equal to 22 and get name then assign to peopleAgeEqual25 
let { name: peopleAgeEqual25 } = peoples.find((obj) => obj.age == 22); 

console.log(peopleAgeEqual25,  peoples)

console.log(' ES6: Every --------------');
const randomeAge = 25;
// if every element match pass condition return true else false 
let everyOneAgeGreaterThanSomeAge = peoples.every((people) => people.age > randomeAge)
console.log(`Is everyone greater than ${randomeAge} ?  ${everyOneAgeGreaterThanSomeAge}`)

console.log(' ES6: Some -----------------');
// if any element of array passs the condition return true else false ( if all failed result false )
const randomeAge1 = 24;
let atleastOneGreateSomeAge = peoples.some((people) => people.age > randomeAge1);
console.log(`Atleast One People Age Greater Than ${randomeAge1} ? ${atleastOneGreateSomeAge}`)

console.log(' ES6: Reduce ----------------');
const numArray3 = [10,11,12,13];
const sum = (acc, val) => { 
    return acc + val 
}
// 1st params accumulator and 2nd params initial value
const sumOfArrayElement = numArray3.reduce((acc, val) => { return acc + val }, 0)
console.log(sumOfArrayElement, numArray3)


// 3. Arrow Functions 

console.log(" ES6: Jump in to Arrow Functions :) ")
const numArray4 = [1,2,3,4]

const sumOfArr4 = numArray4.reduce((acc, val) => acc + val, 0)
console.log(`Sum of Arr 4 = ${sumOfArr4}`)

const multiOfArr4 = numArray4.reduce((acc, val) => acc * val);
console.log(`Multi of Arr 4 = ${multiOfArr4}`)


// 4. Classes 
console.log(" ES6: Classes ------------------------------ ");

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString() {
        return `[x : ${this.x}, y : ${this.y}]`
    }
}
class ColorPoint extends Point {
    static default() {
        return new ColorPoint(0,0, 'black');
    }

    constructor(x,y, color){
        super(x,y)
        this.color = color;
    }

    toString() {
        return `[x : ${this.x}, y : ${this.y}, color : ${this.color}]`
    }

}

console.log(`This is first point is ${new Point(1,1)}`)
console.log(`This is Color Pint ${new ColorPoint(2,10,'green')}`)
console.log(`This is default color pint ${ColorPoint.default()}`)

const colorPoint3 = new ColorPoint(4,2,'red');

console.log(colorPoint3);

// 5. Enhanced object literals 
console.log(' ES6 : Enhanced object literals ')
// define filed with variable assignment of the same name 
// define functions
// define dynamic ( calculated ) properties 

const color2 = 'red';
const point2 = {
    x: 5, y: 3, color2,
    toString() {
        return `[x : ${this.x}, y : ${this.y}, color: ${this.color2}]`
    }
}

console.log(`Point2 => ${point2}`)

// 6. Template Strings -> already done 

// 7. Default function arguments 
console.log(' ES6: Default Function Argument ---------------- ')
let sortingArray = (arr = [], direction = 'assending') => {
    console.log(` Inside Sorting Array : ${arr}, ${direction}`)
}

sortingArray();
sortingArray([1,2,3,4]);
sortingArray([6,7,3], 'dessending')