// example of truthy

const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// console.log(false && "dog");
// // ↪ false

// console.log(0 && "dog");
// // ↪ 0


//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (true)
//     if ({})
//     if ([])
//     if (42)
//     if ("0")
//     if ("false")
//     if (new Date())
//     if (-42)
//     if (12n)
//     if (3.14)
//     if (-3.14)
//     if (Infinity)
//     if (-Infinity)

// If the first operand is truthy, the logical AND operator returns the second operand:
// true && "dog"
// // returns "dog"

// [] && "dog"
// // returns "dog"



















    


// if we have to check array is empty or not.

// if (userEmail.length === 0) {
//         console.log("Array is empty");
//     }
    
// if we have to check Object is empty or not.
// const myObject = {};

// if(Object.keys(myObject).length === 0 ){
//     console.log("Object is empty");
    
// }



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10                       // 5
// val1 = null ?? 10                     // 10
// val1 = undefined ?? 15             // 15
// val1 = null ?? 10 ?? 20               // 10

// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")                         // more than 80