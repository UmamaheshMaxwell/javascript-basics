// var person1 =  new Object()
// var person2 = {}
// var person3 = Object.create(null)

// console.log(person1)
// console.log(person2)
// console.log(person3)

var person = Object.create(null)

person.firstName = "Adam"
person.lastName = "Colson"
person["fullName"] = "Adam Colson"
person["fullname"] = "John Galt"
person["Fullname"] = "Ayn Rand"

person.address = {}
person.address.street = "1st Main"
person.address.city ="Richmond Road"
person.address.state = "Sydney"

console.log(person)