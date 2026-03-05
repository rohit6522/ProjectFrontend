// ES 6 conecpt
// ================ arrow function
// const add = (a,b)=>{
//     return a+b
// } 
// console.log(add(4,6))

// const add=(a,b)=>a+b
// console.log(add(4,7))

// template literals
// let name = "Frontend"
// console.log(`hello ${name}`)

// DESTRUCTURING 
// extract the values && easy to extract multiple value
// const student = {name:"rohit",age:21}
// const {name,age}=student
// console.log(name,age)

// spread operator
// copy or merge the array or object it is denoted by....
// const arr1 = [1,2,3,4,5]
// const arr2 = [...arr1,6,7,8,9]

// console.log(arr2)

// Default parameter

// function fun(name="rk"){
//     console.log(`hii ${name}`)
// }
// fun()

/*
function connectToServer(callback){
    setTimeout(() => {
        console.log("Connected to server")
    }, 2000);
    callback();
}

function download(callback){
    setTimeout(() => {
        console.log("download the file from server")
    }, 2000);
    callback();
}

function save(callback){
    setTimeout(() => {
        console.log("save the file")
    }, 2000);
    callback();
}

// Call Back Help
connectToServer(function(){
    download(function(){
        save(function(){
            console.log("Done")
        })
    })
})

*/

/*
promises are js job that rep a value that is available in later 
three states
pending 
fulfilled
rejected
*/

// reading the files , waiting timer, fetching data from server, database calls 
// you place a order - promises created
// restaurent cooks - pending
// delivered - fullfiled
// order is cancle - rejected state

// CREATE a PROMISES

let Money = new Promise((resolve,reject)=>{
    let bal = 5000
    // user want to withdraw money
    let withdrawAmount = 3000
    if(bal>=withdrawAmount){
        resolve("Withdraw successfull")
    }else{
        reject("Insufficient blnc")
    }
})

// Handle The promises 
// .then() runs if promises is successfull or resolved

Money.then(message=>{
    console.log(message)
})
.catch(error=>{
    console.log(error)
})


let foodOrder = new Promise((resolve,reject)=>{
    let resopen=false
    if(resopen){
        resolve("Food can delivered")
    }else{
        reject("res closed")
    }
})

// handle the promises
foodOrder.then(msg=>{
    console.log(msg)
})
.catch(err=>{
    console.log(err)
})
