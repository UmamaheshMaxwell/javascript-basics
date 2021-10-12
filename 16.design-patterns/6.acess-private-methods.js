/*
    ? Access Private Methods
*/
var Module = (function(){
    var privateMethod = function(message){
        return message
    }

    var publicMethod = function(text){
        return privateMethod(text)
    }


    return {
        publicMethod: publicMethod
    }



    return myObject
})()

console.log(Module.publicMethod('Hey, This message is for you '))