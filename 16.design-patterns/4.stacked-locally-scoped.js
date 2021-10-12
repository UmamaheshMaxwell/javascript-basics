/*
    ? Stacked locally Scoped object literal
*/
var Module = (function(){
    var privateMethod = function(){}

    var myObject = {
        someMethod: function(){

        },

        anotherMethod: function(){

        }
    }

    return myObject
})()

console.log(Module)