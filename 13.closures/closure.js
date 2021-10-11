function greet(message){
    return function (name){
        console.log(message + ' ' + name)
    }
}

var wish = greet('Hello')
console.log(wish)
var sayHello = wish('Uma')
var sayHello1 = wish ('Mani')


function one(message1){
    return function two(message2){
        return function three(message3){
            return message1 + ' '+ message2 + ' ' + message3
        }
    }
}

var callOne = one('one is being called')
var callTwo = callOne('two is being called')
var callThree = callTwo(' three is being called')
console.log(callThree)

console.log(one('one')('two')('three'))