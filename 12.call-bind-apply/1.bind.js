var person1 = {firstName: 'Uma', lastName: 'Swathi'}
var person2 = {firstName: 'Jagrav', lastName: 'Manasvi'}
var person3 = {firstName: 'Sambhav', lastName: 'Ritu Hani'}

function getName(message, city){
    return  message + " " + 
            this.firstName + ' '+ 
            this.lastName + " Welcome to " + 
            city
}

var getFullNameUsingBind = getName.bind(person1)
console.log(getFullNameUsingBind('Hello', 'Bharat'))

var getFullNameUsingBind2 = getName.bind(person1)('Hello', 'Bharat')
console.log(getFullNameUsingBind2)

var getFullNameUsingCall = getName.call(person2, 'Hey', 'Bengaluru')
console.log(getFullNameUsingCall)

var getFullNameUsingCall = getName.apply(person3, ['Hi', 'Sydney'])
console.log(getFullNameUsingCall)

