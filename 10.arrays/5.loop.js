var items1 = ["desktop", "mobile", "iPad", "laptop"]
console.log(items1.length)

//1st way - using for loop

for(var i=0; i< items1.length;i++){
    console.log(items1[i])
}

// 2nd way - using foreach
var items2 = ["TV", "Refrigirator", "Washing Machine", "Water filter"]
var data = {}

var forEachData = items2.forEach(function(item, index){
    console.log(item)
    return item
})

console.log(forEachData)

// 3rd Way - using Map method
var items3 = ["TV", "Refrigirator", "Washing Machine", "Water filter"]
var data = {}

var mapData = items3.map(function(item, index){
    return item + index
})


console.log(mapData)

/*
 ? for...in Loop => iterates over the index in the array.

 ? for...of Loop => iterates over the values in the array
*/
// 4th way - for in
var names1 = ["uma", "scott", "adam", "tuan"]
for(index in names1){
    console.log(names1[index])
}

var data1 = [
    {name: "Uma", city: "hyd", isAdmin: true},
    {name: "Scott", city: "Boston", isAdmin: true},
    {name: "Adam", city: "Sydney", isAdmin: true},
    {name: "tuan", city: "Vietnam", isAdmin: true}
]

for( index in data1){
    console.log(data1[index])
}

// 5th way - for of
var names1 = ["uma", "scott", "adam", "tuan"]
for(name of names1){
    console.log(name)
}


var data2 = [
    {name: "Uma", city: "hyd", isAdmin: true},
    {name: "Scott", city: "Boston", isAdmin: true},
    {name: "Adam", city: "Sydney", isAdmin: true},
    {name: "tuan", city: "Vietnam", isAdmin: true}
]

for( value of data2){
    console.log(value)
}