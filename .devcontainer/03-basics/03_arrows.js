const user = {
    username: "Mohit Kumar",
    websiteUrl: "codobux",

    welcomeMessage: function(){
       
        // console.log(this);                                                  // {
                                                                                //     username: 'Mohit Kumar',
                                                                                //     websiteUrl: 'codobux',
                                                                                //     welcomeMessage: [Function: welcomeMessage]
                                                                                // }
        return `Welcome ${this.username} in the ${this.websiteUrl}`;
    }

}

// const welcomeMessageResult1 = user.welcomeMessage();           
// console.log(welcomeMessageResult1);                                       // Welcome Mohit Kumar in the codobux

// user.username = "sam";
// const welcomeMessageResult1 = user.welcomeMessage();     
// console.log(welcomeMessageResult1);                                        // Welcome sam in the codobux




// arrows functions



// function chai() {
//     let username = "Mohit Bhaker";
//     console.log(this.username);                      // undefined
// } 
// chai();

// const chai = function() {
//     let username = "Mohit Bhaker";
//     console.log(this.username);                        // undefined
// }
// chai();

// const chai = () => {
//     let username = "Mohit Bhaker";
//     console.log(this.username);                          // undefined
// }
// chai();

// function chai() {
//     console.log(this);                                              // <ref *1> Object [global] {
//                                                                     //         global: [Circular *1],
//                                                                     //         clearImmediate: [Function: clearImmediate],
//                                                                     //         setImmediate: [Function: setImmediate] {
//                                                                     //           [Symbol(nodejs.util.promisify.custom)]: [Getter]
//                                                                     //         },
//                                                                     //         clearInterval: [Function: clearInterval],
//                                                                     //         clearTimeout: [Function: clearTimeout],
//                                                                     //         setInterval: [Function: setInterval],
//                                                                     //         setTimeout: [Function: setTimeout] {
//                                                                     //           [Symbol(nodejs.util.promisify.custom)]: [Getter]
//                                                                     //         },
//                                                                     //         queueMicrotask: [Function: queueMicrotask],
//                                                                     //         structuredClone: [Function: structuredClone],
//                                                                     //         atob: [Getter/Setter],
//                                                                     //         btoa: [Getter/Setter],
//                                                                     //         performance: [Getter/Setter],
//                                                                     //         fetch: [Function: fetch],
//                                                                     //         navigator: [Getter],
//                                                                     //         crypto: [Getter]
//                                                                     //       }
// }
// chai();

    // const chai = function()  {
    //     console.log(this);                                                       //  // <ref *1> Object [global] {
    //                                                                             //         global: [Circular *1],
    //                                                                             //         clearImmediate: [Function: clearImmediate],
    //                                                                             //         setImmediate: [Function: setImmediate] {
    //                                                                             //           [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //                                                                             //         },
    //                                                                             //         clearInterval: [Function: clearInterval],
    //                                                                             //         clearTimeout: [Function: clearTimeout],
    //                                                                             //         setInterval: [Function: setInterval],
    //                                                                             //         setTimeout: [Function: setTimeout] {
    //                                                                             //           [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //                                                                             //         },
    //                                                                             //         queueMicrotask: [Function: queueMicrotask],
    //                                                                             //         structuredClone: [Function: structuredClone],
    //                                                                             //         atob: [Getter/Setter],
    //                                                                             //         btoa: [Getter/Setter],
    //                                                                             //         performance: [Getter/Setter],
    //                                                                             //         fetch: [Function: fetch],
    //                                                                             //         navigator: [Getter],
    //                                                                             //         crypto: [Getter]
    //                                                                             //       }
    // }
    // chai();

// const chai = () => {
//     console.log(this);                          // {}
// }
// chai();







// 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 

// const addTwo = (num1, num2) => (num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(4, 5));


                                                                                                                // const myArray = [2, 5, 3, 7, 8];

                                                                                                                // myArray.forEach();
