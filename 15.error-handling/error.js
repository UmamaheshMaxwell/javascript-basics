/*
    ? try-catch-block
*/

try {
    // code that may or may not throw error
} catch (ex) {
    // code to be executed if an error occurs 
} finally {
    // code to be executed regardless of an error occurs or not 
}

// try-catch-finally 

// try {
//     var output = getMessage('Hello', "Uma")
//     console.log('This is try block')
//     var data =["scott", "Adam","Tuan"]
//     data.forEach(function(name){
//         console.log(name)
//     })
// } catch (ex) {
//     console.log(ex)
// } finally {
//     console.log("Finally block will get exeucuted always")
// }

// throw 
try {
    throw "Error Occrued"
}
catch (ex) {
    console.log(ex)
}

// thorw with error info

try {
    // here is where we noticed duplicate employee Ids
    throw {
        number : 101,
        message: "Error Occured"
    }
} catch (ex){
    console.log(ex.number, ex.message)
    //console.log("Error :" , {name: "uma"})
}
