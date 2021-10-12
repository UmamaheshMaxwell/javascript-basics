/*
    ? Anonymous object literal
*/
var Module = (function(){
    var privateMethod = function(){
        console.log('this is private method')
    }
    
    return {
        publicMethodOne: function(){
            console.log('This is public method one')
        },
        publicMethodTwo: function(){
            console.log('This is public method two')
        },
        publicMethodThree: function(){
            console.log('This is public method three')
        }
    }
})()

//console.log(Module.privateMethod()) // This is Private
console.log(Module.publicMethodOne())
console.log(Module.publicMethodTwo())
console.log(Module.publicMethodThree())