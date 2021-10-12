/*
    ? var - function scope
    ? let - block scoped
*/
function sample(){
    var foo ="blue"
    console.log(foo) //blue
}
sample()
console.log(foo)

if(true){
    var foo ="Hello"
    let bar = "How are you"
    const baz = "I am fine"

    console.log(foo)
    console.log(bar)
    console.log(baz)
}

console.log(foo)
//console.log(bar)
//console.log(baz)

function getData(){
    var a =10;
    let b =20
    const c =30;

    if(true){
        console.log(a)
        console.log(b)
        console.log(c)

        var value1 = "Scott"
        let value2 = "Adam"
        const value3 = "Tuan"
    }

    console.log(value1)
    // console.log(value2)
    // console.log(value3)
}

//console.log(value1)

getData()

console.clear()
// var outside of a for loop

// for(var i =0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

for(let i =0; i<3; i++){
    console.log(i)
}
//console.log(i)

console.clear()
// Redefining let

function Test(){
    let foo = 1;
        foo =10; // Re-Assigning is possible

    //let foo =100 // Redefining not possible

    const myBoolean = true; 

       //   myBoolean = false // Re-Assigning is not possible
}

Test()


const superHeros = ["Hanuman", "Bheem", "Krishna"]
superHeros.push('Ram')
console.log(superHeros)