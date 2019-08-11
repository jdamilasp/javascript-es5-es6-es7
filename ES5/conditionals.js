console.log('--- Condition ----------------------------------------------')

console.log('--- if else  ----------------------------------------------')
// if else 
/**
 * if(condition) {
 *  // do something 
 * }else{
 *  // else : do something 
 * }
 */
var choice = 'left';
if(choice === 'left'){
    console.log(" Move to Left Side ")
}else{
    console.log(" Move to Right Side ")
}

console.log('--- if, else if, else ----------------------------------------------')

var choice = "23432";
if(choice === 'left'){
    console.log(" Move to Left Side ")
}else if(choice === 'right'){
    console.log(" Move to Right Side ")
}else{
    console.log(" Invalid Choice :( ")
}

console.log('--- switch ----------------------------------------------')
// switch 
/**
 * switch(expression) {
 *  case 'one': 
 *      // 'one' match the expression result , do this
 *      break;
 *  case 'two'
 *      // 'two' match the expression result , do this
 *      break;
 *  default: 
 *      nothing match, do this
 * }
 * 
 */

 var color = "blue";

 switch (color){

    case 'red': 
        console.log(' red match ')
        break;
    case 'blue': 
        console.log(' blue match');
        break;
    default:
        console.log(' invalid color ')

 }