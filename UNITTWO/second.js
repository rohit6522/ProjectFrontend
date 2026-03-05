

// create a obj 

let obj = {
    name : "Rohit",
    age : "21",
    city : "Ara"
};
// console.log(obj.name);
// console.log(obj.age);


// read properties and add , modify

// JSON.stringify()
    let jsonString=JSON.stringify(obj)
    console.log(jsonString);
    console.log(typeof(obj))
    console.log(typeof(stringify))


// JSON.parse() 
let data = '{"name":"rk","age":"21","city":"ara"}'
let jsonParse = JSON.parse(data);
console.log(typeof(data))
console.log(typeof(jsonParse))
// access properties 
console.log(jsonParse.city)
console.log(`city name is ${jsonParse.city}`)

// ==============adding properties =

obj.Grade="A+ "
console.log(obj)
