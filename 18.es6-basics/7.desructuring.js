// Array Destructuring

let arr = ["Scott", "Adam", "Tuan"]

let [first, second, third] = arr;

console.log(first)
console.log(second)
console.log(third)

let [firstName, lastName] = "John Galt".split(" ")

console.log(firstName)
console.log(lastName)

let [fName, ,title] = ["Uma", "Mahesh", "Meka"]

console.log(title)

// Object Destrcuturing

let user = {
    name: 'John',
    age: 30
}

for(let [key,value] of Object.entries(user)) {
    console.log(`${key} : ${value}`)
}

let options = {
    menu: "Menu",
    width: 100,
    height: 200
}

let {menu, width, height} = options

console.log(menu, width, height)