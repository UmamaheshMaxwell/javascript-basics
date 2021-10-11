/*
    ? anything which is JSON valid is valid object literal
    ? JSON.stringify() - converts a javascript object to be serialized JSON string
    ? JSON.parser() - deserializes a JSOn string representation to a 
    ?                 javascript object
JSON.parse()
*/
var JSONObject = {
    "name" : "uma",
    "age": 16,
    "country": "Bharat"
}

var object = {
    "name" : "uma",
    "age": 16,
    "country": "Bharat"
}


var newOject = {
    name: "Mahesh",
    age: 16,
    country: "Australia"
}


var data = {
   name: "Uma",
   city: "hyderabad",
   isAdmin : true
}

var JSONStringifyData = JSON.stringify(data)

var sample = JSON.stringify(JSONStringifyData)

console.log(sample, typeof sample)

console.log(JSONStringifyData, typeof JSONStringifyData)

var JSONParseData = JSON.parse(JSONStringifyData)

console.log(JSONParseData, typeof JSONParseData)