/* 
    * Object Literal Syntax - {} 
*/
var person = {}

person.firstName = "Adam"
person.lastName = "Colson"
person["fullName"] = "Adam Colson"
person["fullname"] = "John Galt"
person["Fullname"] = "Ayn Rand"

person.address = {}
person.address.street = "1st Main"
person.address.city ="Richmond Road"
person.address.state = "Sydney"

//console.log(person)

var student = {
    firstName:"Tuan",
    lastName: "Bui",
    address: {
        street: "Some Road",
        city: "Vietnam",
        state: "Some State"
    },
    getFullName: function(){
        return this.firstName + " " + this.lastName
    }
}

console.log(student.getFullName())