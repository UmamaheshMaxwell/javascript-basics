class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        return this.firstName + ' '+ this.lastName
    }
}

let student = new Student("Scott", "Desatnick")

console.log(student.firstName)
console.log(student.lastName)
console.log(student.getFullName())

class Vehicle {
    constructor (name, type) {
        this.name = name;
        this.type = type;
      }
}

class Car extends Vehicle {
    constructor(name, type){
        super(name, type)
    }
}

let car = new Car('Tesla', 'Car');
console.log(car)
