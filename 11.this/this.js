console.log(this)

function sample(){
    console.log(this)
}

sample()

console.clear()
var obj ={
    name: 'uma',
    getName: function(){
        var self = this;
        
        console.log(self)
        self.name ="mahesh"
        console.log(self)
        function b(name){
            self.name=name
            console.log(self)
        }

        b('update again')
    }
}

obj.getName()