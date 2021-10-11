function Student(firstName, lastName){
    this.firstname = firstName
    this.lastName = lastName
}

Student.prototype.getFullName = function(){
    return this.firstname + " " + this.lastName
}

Student.prototype.city = "Hyderbad"

var student1 = new Student("Scott", "Desatnick")
var student2 = new Student("Adam", "Colson")
var student3 = new Student("Tuan", "Bui")

console.log(student1)
console.log(student2)
console.log(student3)

student1.city="Boston"
student2.city="Sydney"
student3.city="Vietnam"


student2.city="Sydney"
student3.city="Vietnam"

console.log(student1.__proto__.city)
console.log(student2.__proto__.city)
console.log(student3.__proto__.city)

// console.log(student1.getFullName())
// console.log(student2.getFullName())
// console.log(student3.getFullName())

