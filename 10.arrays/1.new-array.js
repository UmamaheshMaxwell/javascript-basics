/*
    ! Array index starts with 0
*/
var people = new Array("Uma", "Swathi", "Jagrav")

console.log(people)
console.log(people.length)
console.log(people[1])

var students = new Array(3)

students[0] ="Scott"
students[1] ="Adam"
students[2] ="Tuan"
students[3] ="Uma"

console.log(students[0])
console.log(students[1])
console.log(students[2])
console.log(students[3]) // This is possible even though length says 3
console.log(students[4]) // This will return undefined and 
                         // doesn't throw any error