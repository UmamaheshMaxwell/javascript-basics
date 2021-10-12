var Module = (function(){
    var privateMethod = function(){
        console.log('This is a private method')
    }

    return {
        publicMethod: function(){
            console.log('Public Method')
        }
    }
})()

console.log(Module.publicMethod())