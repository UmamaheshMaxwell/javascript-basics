var person = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    city: 'Hyderabad'
}

person.firstName = "Scott"
person.age =39;
delete person.age
console.log(person)

console.clear()
/*
    ? Object.preventExtensions
    ? We can edit and delete the existing properties
    ? We can not add the new properties
*/
var preventExtensionsObj = {
    name: 'Mahesh',
    city: 'Mumbai',
    age: 25
}
Object.preventExtensions(preventExtensionsObj)

preventExtensionsObj.email = "uma@ef.com" // Add the property
preventExtensionsObj.age = 16 // Update the property
delete preventExtensionsObj.city // Delete the property

console.log(preventExtensionsObj)

/*
    ? Object.seal
    ? We can edit existing properties
    ? We can not add new properties
    ? We can not delete existing properties
*/
var sealObj = {
    name: 'Mahesh',
    city: 'Mumbai',
    age: 25
}
Object.seal(sealObj)

sealObj.email = "uma@ef.com" // Add the property
sealObj.age = 16 // Update the property
delete sealObj.city // Delete the property

console.log(sealObj)

/*
    ? Object.freeze
    ? We can edit existing properties
    ? We can not add new properties
    ? We can not delete existing properties
*/
var freezeObj = {
    name: 'Mahesh',
    city: 'Mumbai',
    age: 25,
    address: {
        state: 'Telangana'
    }
}
Object.freeze(freezeObj)

freezeObj.email = "uma@ef.com" // Add the property
freezeObj.age = 16 // Update the property

delete freezeObj.city // Delete the property

Object.freeze(freezeObj.address)

freezeObj.address.state ='Maharashtra'

console.log(freezeObj)