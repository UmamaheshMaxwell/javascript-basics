function Shape(){

}

Shape.prototype.draw = function(){
    return "I am generic shape"
}

// Circle

function Circle(){

}

// new Object()
// {}
// Object.create()
// new Constructor() function

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function(){
    return "I am circle"
}

// Square

function Square(){

}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
    return "I am square"
}

// Triangle

function Triangle(){

}

Triangle.prototype = new Shape()

// Triangle.prototype.draw = function(){
//     return "I am Triangle"
// }

// var shape = new Shape();
// console.log(shape.draw())

// var circle = new Circle();
// console.log(circle.draw())

// var square = new Square();
// console.log(square.draw())

// var triangle = new Triangle();
// console.log(triangle.draw())

var shapes = [new Shape(), new Circle(), new Square(), new Triangle()]

shapes.forEach(function(shape){
    console.log(shape.draw())
})