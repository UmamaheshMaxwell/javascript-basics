function Student(fname, lname){
     this.firstName = fname
     this.lastName = lname
     this.getFullName = function(){
         return this.firstName + " " + this.lastName
     }
}

var student = new Student()

student.city = "Bengaluru"

console.log(student)
console.log(student.getFullName())