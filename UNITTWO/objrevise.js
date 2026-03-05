// obj create 

const student = {
    "name":"test", // key and value
    age : 20,
    isActive: true,
    isEnrolled:false,
    course:"Btech Cse",
    city : "Ara"
}

// console.log(student)
// console.log(student.city)

// json.stringify convert js to string
const StringJs = JSON.stringify(student)
console.log(StringJs)

// json.parse convert string to object 

const dataFromServer = '{"name":"rk","age":"21","city":"ara"}'

console.log(dataFromServer)
const jsObj=JSON.parse(dataFromServer)
console.log(jsObj)
