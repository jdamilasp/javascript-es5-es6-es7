console.log(" JS Object :: ")

var person = {

    firstName: 'John',
    lastName: 'Smit',
    age: 30,
    isMarried: false,
    pet: {
        type: 'dog',
        name: 'Fido'
    },
    getFullName: function() {
        return person.firstName + " " + this.lastName
    }
}

console.log(" GET PULL Name : " +person.getFullName())

console.log(" DRY - Don't Repeat Yourself :( ")


function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = [1,2,232,32,1,231,231];
}

var student1 = new Student("Amila", "Sampath");
var student2 = new Student('John', 'Smit');

console.log(student1, student2)

console.log(" Object Prototypes :: ");

// console.log(student1.getFullName()) // you can't use here  :(

Student.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

console.log(student1.getFullName()) // you can use here :)

console.log(" JS this :: ")

var randomString = "XYZPKLDDLFDJSL";

//console.log(this.randomString) // You can't call like this

Student.prototype.getScore = function(){
    var total = 0;
    this.score.forEach(function(score){
        total = total + score
    })
    return total;
}

console.log(" Get Score student1 : ", student1.getScore())