/*
    ? Locally Scoped object literal
*/
var Module = (function(){
    // locally scoped object
    var myObject = {};
    var privateMethod = function(){

    }
    myObject.PublicMethod = function(){
        return "This is Public Method"
    }
    return myObject
})()

console.log(Module.PublicMethod())