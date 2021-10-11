function Student(){
    this.name = "John"
    this.gender = "male"
}

Student.prototype.age = 15;

var stuObj1 = new Student();
console.log(stuObj1.age)

var stuObj2 = new Student();
console.log(stuObj2.age)

console.log(stuObj1)
console.log(stuObj2)

var stuObj = new Student();
console.log(Student.prototype)
console.log(stuObj.prototype)
console.log(stuObj.__proto__)

console.log(typeof Student.prototype)
console.log(typeof stuObj.__proto__)

console.log(Student.prototype === stuObj.__proto__)