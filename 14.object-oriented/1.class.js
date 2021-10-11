// class 

function Student(){

}

// Instance for a clss

function Person(){

}

var person1 = new Person();
var person2 = new Person();

// Constructor 

function Order(){
    console.log('order initiated')
}

var order1 = new Order() // Order() is a contructor

// properties

function Customer(gender){
   // var name = "uma" // Private Variable
    this.gender = gender // Property
}   

var customer1 = new Customer('Female')
var customer2 = new Customer('Male')

console.log(customer1)
console.log(customer2)