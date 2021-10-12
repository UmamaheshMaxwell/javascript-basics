console.log(multiply(2)(3)(4)) // 24

function multiply(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
console.clear()

var a = 10
var b = a
    a = 20
console.log(a, b)

var x = [1,2]
var y = x
x.push(3)
console.log(x)
console.log(y)

var m = [1,2]
var n = m
m =[1,2,3]
console.log(m)
console.log(n)

// TO DO
var data =[2,3,4]
var data1 = data

// 12Uma34
//3Uma7
//3Uma34
var add = 1+ 2 + "Uma" + 3 + 4 
console.log(add)

// undefined 
// 0
/*
    ? This code will return 0 as ouput. 
    ? because delete operator is used to delete property from an object
    ?  and here x is not an object
*/
var output = (function(x){
    delete x;
    return x;
})(0)

console.log(output)

var array = ['a', 'b', 'c', 'd', 'e', 'f']

// method 1
array.length =0
console.log(array)

//  method 2
array =[];
console.log(array)

// method 3
array.splice(0, array.length)
console.log(array)

// method 4 - Dangerous
while (array.length){ // 6 5 4 3 2 1 0
    array.pop()
}
console.log(array)

// Method 5 
// var data = array.map(function(){
//     array.pop()
// })

// console.log(data)
console.clear()

var value =10;
var newOutput = (function(x){
    delete x;
    return x
})(value)

console.log(newOutput)

// Even or Odd

console.log(evenOrOdd(3)) // false
console.log(evenOrOdd(6)) // true
console.log(evenOrOdd(7)) // false

function evenOrOdd(a){
    return (a%2)===0;
}

console.clear()

var a =10;

if(a==1) {
    console.log('Yes a is 1')
} else if(a ==5) {
    console.log('Yes a is 5')
}  else if(a ==6) {
    console.log('Yes a is 6')
} else {
    console.log('sorry a doesn\'t match any of our conditions')
}

console.clear()
/* 
    * == and ===
    ? == will only check the value
    ? === will check both the value and type
*/

console.log(1==1)
console.log(1=="1") 
console.log(1==="1")

console.log(1==1)
console.log(1!=1)

console.log(1===1)
console.log(1!==1)

console.clear()

console.log(extensionExtractor("resume.doc")) // doc
console.log(extensionExtractor("bangalore.txt")) // txt
console.log(extensionExtractor("note")) // false
console.log(extensionExtractor())

function extensionExtractor(filename){
    return (filename && filename.split(".").length>1) ? 
                        filename.split(".")[1] : 
                        false
}

// function extensionExtractor(filename){
    // if (filename.split(".")[1]) {
    // return filename.split(".")[1]
    // } else {
    //     return false
    // }
// }

// function extensionExtractor(filename){
//     if(filename){
//         if (filename.split(".")[1]) {
//             return filename.split(".")[1]
//             } else {
//                 return false
//             }
//     } else {
//         return 'No File'
//     }
// }

// ternary operator 
// value =10? first : second

console.clear()

// arraySum([1,2,3,4,5]) // 15
// arraySum([1,2,3,4,5,6,7,8,9,10]) //55
// arraySum([1,2, 'uma',3,4,5]) //15
// arraySum([1,2, 'uma', {a: 'ma'},3,4,5]) //15
// arraySum([1,2,[[3],4],5]) //15

console.log("Hello %s your Id is %i ", "Uma", 12345)
console.log("User Object %o", {name: 'Uma'})

var userData = [
    {name: "Scott", age: 45, city:'boston'},
    {name: "Adam", age: 43},
    {name: "Taun", age: 42},
]
console.table(userData)