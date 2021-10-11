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

console.log(data.indexOf("c#"))
