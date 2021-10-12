let simple = `this is a template literal`

console.log(simple)

let str = `Template literal in ES6`

console.log(str)
console.log(str.length)
console.log(typeof str)

// Using Single quote

let anotherString = `here's is another string`
console.log(anotherString)

// string contains backtick

let strWithbacktick = `Template literals uses backtick \` indead of quotes`
console.log(strWithbacktick)

// Multiline Strings ( prior to ES6)
var msg = 'Multiple \n\
           string'
console.log(msg)

let para =`
           This text
           can
           span multiple lines
          `
console.log(para)

// variable and expression substitutions 

let firstname ='Scott',
    lastName = 'Desatnick'

let greeting = `Hi ${firstname} ${lastName} `
console.log(greeting)