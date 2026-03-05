// function checkLogin(username, password) {
//     return new Promise(function (resolve, reject) {
//         console.log("Check In creddentials....")
//         setTimeout(() => {
//             if (username === "rohit" && password === "12345") {
//                 resolve("Successfully")
//             } else {
//                 reject("Sorry!")
//             }
//         }, 2000)
//     })

// }

// checkLogin("rohit", "12345").then((result) => {
//     console.log(result)
// })

//     .catch((error) => {
//         console.log(error)
//     })

// // async and await

// // async is keyword that is used before the function
// // async always return a promises
// // await inside the function - wait and respond


// // async function to handle login process 

// async function login() {
//     try {
//         // await pause this function untill promis will finish
//         const result = await checkLogin("rohit", "12345")
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// login()
// new

function orderFood(isOpen) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOpen) {
                resolve("Open u can order")
            } else {
                reject("Sorry!")
            }
        }, 2000);
    })
}

async function order(isOpen) {
    try {
        const result = await orderFood(false)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
order()
