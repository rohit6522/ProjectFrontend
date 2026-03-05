/*
function checkResult(marks){
    return new Promise(function(resolve,reject){
        console.log("checking for result..")
        setTimeout(function(){
            if(marks>=40){
                resolve("You are passed")
            }else{
                reject("failed")
            }
        },2000)
    })
}

// call the prmises 
checkResult(85).then(function(message){
    console.log("message")
})
.catch(function(error){
    console.log(error)
})
*/

function getPost(){
    return fetch("https://jsonplaceholder.typicode.com/posts/2")
}
// call the function 
getPost()

// convert res to json 
.then(function(response){
    if(!response.ok){
        throw new Error(" api error")
    }
    return response.json()
})

//get the data 
.then(function(data){
    console.log("post data received as :")
    console.log("title",data.title)
    console.log("body",data.body)
})
.catch(function(error){
    console.log("Something went wrong ")
})