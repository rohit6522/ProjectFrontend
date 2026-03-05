// ==================================== declarataion ===========================================

// var v = 56;  // 
// let l = 6;
// const c = 44;

// // =========================== REDECLARARTION IN var ============================================
// var a = 5;
// var a = 44;
// // console.log(a) redeclarartion is allowed
// console.log("Value of a is :- ",a);

// ======================================= BY let ================================================
// let b = 7;
// let b = 9;

// console.log(b) // error because redeclarartion is not allowed in let Variable

// ====================================== BY Const ==================================================
// const t = 8;
// const t = 7;

// console.log(t) // error because redeclarartion is not allowed in Const Variable



// ===================================== REASSIGNMENT ==================================================
// // reassignment with var 
// var a = 5;
// a = 400;
// console.log("New Value :-",a) // allowed reassign value


// =========================================  LET ==================================================
// let v = 98
// v = 45
// console.log(v) // allowed

// ============================================== CONST ===============================================
// const t = 87
// t = 5 // not allowed
// console.log(t) // error



// ======================================== BLOCK SCOPE =======================================
// if(true){
//     var i = "this is var"
//     let l = "this is let"
//     const c = "This is const"
//     // console.log(i,l,c)

// }

// console.log(i) // allowed
// // console.log(l) not allowed
// // console.log(c) not allowed


// ================================= FUNCTION SCOPE ============================================
// var x = 5
// let y = 8
// const z = 7

// function test(){
//     // ============ local scope
//     var a = "this is for var fun"
//     let l = "this is for let fun scope"
//     const c = "This is for const fun scope"
//     // console.log(a,l,c)
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// test()

// Global Scope 
// console.log(a) // error
// console.log(l) // error
// console.log(c) // error


// ======================================= HOISTING ===============================================
// console.log("hosting var",varHoist)
// var varHoist = "this is for hoist" // allowed
//not posssible with let and const


//     redeclaration reassignment blockscope funscope hoisting 
// var     yes            yes         var      not        yes

// let     not            yes         not      not       no         

// const   not          not          not        not       not

// ==========================================DATATYPES ==============================================
// 1. Premitive DataType
// let num = 3434
// let string = "Hello JS"
// let isActive = true
// let nothing  = null
// let notDefiend;
// let big = 54415346n // big int
// let sym = Symbol("id")

// console.log(typeof(string),typeof(num)) // checking dataType

// ====================================Refrence Type ==========================================

// let arr = [1,8,4,9] // array
// let obj = {
//     name:"rk" // obj
// }

// ===================================== OPERATORS ==============================================

// arithmetic operators 
// let a = 4
// let b = 5

// console.log("arithmetic operation",a+b,a-b,a*b,a/b,a%b)

// console.log("relational ",(a==b),(a>=b),(a<=b),(a!=b))

// console.log("logical",(a&&b),(a||b),(!a))

// console.log("assignment",(a+=b),(a-=b),(a*=b),(a/=b))




// ====================================== CONTROL STATEMENTS ========================================
// 1. if else 
// 3. Switch Case
// 4. For loop 
// 5. While loop
// 6. Do While

// let d =5;
// do{
//     console.log(d);
//     d++;
// }while(d<=5)

// ======================================= FUNCTIONS ============================================ 

// function greet(name){
//     return "Hello " +name
// }

// console.log(greet("rohit"))

// let a = 4;
// let b = 5;


// function add(a,b){
//     return a+b;
// }

// console.log(add(4,9))

// ===================================== Arrow Function =================================== 

// const add = (a, b) => a + b  ===  first method
// console.log(add(4, 8))

// const ad = (a, b) => {  ==== second method
//     return a + b;
// }
// console.log(ad(4,9))


