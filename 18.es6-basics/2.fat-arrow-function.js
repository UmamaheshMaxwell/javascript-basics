var add = (x,y) => {
    return x + y
}

/*
    * () => expression
    * () => {return expression} // Both are equal
*/

var add = (x,y) => x+y

var add = (x,y) => {return x+y} 

console.log(add(10,20))

// Sort 

// let numbers = [4,2,6]
// numbers.sort(function(a,b){
//     return b-a
// })

let numbers = [4,2,6]
numbers.sort((a,b) => b-a)
console.log(numbers)

/*
    Takes single parameter
    (p) => {statements}
     p  => {statement} // bith are equal
*/
console.clear()
let names = ['Scott', 'Adam', 'Tuan', 'Uma']

// let lengths = names.map(function(name){
//     return name.length
// })

let lengths = names.map(name => name.length)
console.log(lengths)

console.clear()

// With No parameters

let logDocument = () => console.log(window.document)

logDocument()

// Line Break

var multiply = (x,y) => x*y // This will work

// var multiply = (x,y) 
// => x*y // This will give syntax error

var multiply = (x,y) =>
 x*y // This will not give syntax error

 console.log(multiply(50,30))

//  // Dealing with object literals
//  let setColor = function(color) {
//      return {value: color}
//  }

let setColor = color =>  ({value:color})
   

 let backGroundColor = setColor('Green')
 console.log(backGroundColor)