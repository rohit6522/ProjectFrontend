const marks = [40,50,20,30,90]   // array created 
console.log("Original Array: ",marks)

// push add the element=
marks.push(34)
console.log("Pushes array: ",marks)

// pop to remove or delete the element 
marks.pop(20)
console.log("After a pop :",marks)

// total length of the array
console.log("Total len: ",marks.length)

// shift remove first
marks.shift(10)
console.log(marks)

// index of ???

console.log("index of 30",marks.indexOf(30))

// for each loop
marks.forEach(m=>console.log(m))

// map
const double = marks.map(m=>m*2)
console.log(double)

// filter // condition
let passed = marks.filter(m=>m>=40)
console.log("Pass student is: ",passed)