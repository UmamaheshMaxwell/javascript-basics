var fruits =["Orange", "Apple", "Banana", "Guava"]

var vegetbales = ["Potato", "Tomato", "Brinjal", "Drumstick"]

/*
    ? concat method
*/
var mix1 = fruits.concat(vegetbales)

console.log(mix1)

var mix2 = vegetbales.concat(fruits)

console.log(mix2)

/*
    ? join method
*/
var movies = ["Avatar", "Good Will Hunting", "Vanilla Sky", "Mars"]

var movieString = movies.join(",")

console.log(movieString, typeof movieString)

/*
    ? split method
*/

console.log(movieString.split(","))

/*
    ? indexOf method
*/

var data = ["C#", "JavaScript", "Python", "MSSQL"]

console.log(data.indexOf("c#".toUpperCase()))

var values = ["Umesh"]
console.log(values.indexOf("U"))


var array = [1,2,3]
var obj = {}
console.log(typeof array, typeof obj)

if(typeof array === 'array'){
    array[3] ="somedata"
}

/*
    ? Array.isArray
*/

if(Array.isArray(array)){
    array[3] ="somedata"
}
console.log(typeof array, Array.isArray(array))
console.log(array)

/*
    ? push - adds the element at the end of an array
    ? pop  - removes the element at the end of an array
    ? unshift - adds the element at the begining of an array
    ? shift - removes the element at the begining of an array
*/
console.clear()
var arrayList = [1,2,3,4,5]

arrayList.push(6)
arrayList.push(7)
arrayList.unshift(0)
arrayList.unshift(-1)
arrayList.pop()
arrayList.pop()
arrayList.shift()
arrayList.shift()
console.log(arrayList)

var dataList = []

dataList.push({firstName: 'Scott', lastName: 'Destanick'})
console.log(dataList)