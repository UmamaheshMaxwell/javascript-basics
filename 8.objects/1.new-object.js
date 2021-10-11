var person = new Object()

person["firstName"]="Scott"
person["lastName"] ="Desatnick"

var fullName="fullName"
person[fullName] = "Scott Desatnick"


console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["fullName"])
console.log(person["city"])

console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)

person.address = new Object()

person.address.street = "1st Main"
person.address.city ="Delhi"
person.address.state = "UP"

console.log(person)
console.log(person.address.street)
console.log(person.address.city)
console.log(person.address.state)