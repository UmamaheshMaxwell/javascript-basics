var Student = (function(){
    var instance = null;

    // Create Instance
    var createInstance = function(){
        var obj = Object.create(null)
        console.log('Student object has been created')
        return obj
    }

    // Get That Instance
    var getInstance = function(){
        if(!instance){
            instance = createInstance()
        }
        return instance;
    }

    return {
        get: getInstance
    }

})()


console.log(Student.get())
console.log(Student.get())
console.log(Student.get())
console.log(Student.get())
















// function Student(){
//     console.log("new instance created")
// }

// var student1 = new Student()
// console.log(student1)
// var student2 = new Student()
// console.log(student2)
// var student3 = new Student()
// console.log(student3)