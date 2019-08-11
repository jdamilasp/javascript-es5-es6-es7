console.log(`ES5 and ES6 Sample Code Base`)

console.log('ES5 Work flow to Create Employee')

function createEmployeeWorkFlow(name, cb) {

    // call create employee fun
    createEmployee(name, function(err, employee){
        if(err){
            return cb(err, null)
        }

        /**
         * here multiple call back function, then become more call back also increase complexcity 
         */
        cb(undefined, employee)
    })    
}

// Create Employee function 
function createEmployee(name, cb) {
    var emp = { name : name };
    if(name.length > 3){
        cb(undefined, emp)
    }else{
        cb("Name undefined :(", null)
    }
}

// ------------------
// call main function 
var name = "Amila"
createEmployeeWorkFlow(name, function(err, result){
    if(err){
        console.log('unable to create employee', err);
        return;
    }
    console.log('successfully created employee', result)
})
// ------------------


console.log('----------------------------------------------------')
console.log('ES6/ES7 Work flow to Create Employee')


const promiseCreateEmployee = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            Math.random() > 0.8 ? resolve(Math.random()) : reject(' Unable to Find Value ')

        }, 5000)

    });
}


let asyncEmpName = "Sampath";
const asyncCreateEmployeeWorkFlow = async () => {
    try {
        let employee = await promiseCreateEmployee(name);
        if(employee){
            console.log(`Successfully Create Employee ${employee}`)
        }
    }catch(err){
        console.log(`Unable to Create Employee ${err}`)
    }

}

asyncCreateEmployeeWorkFlow();