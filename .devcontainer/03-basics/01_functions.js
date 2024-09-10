
// 1  calling function by reference only. it will work when we print statement in the function (local scope) 
// 1.1
// function sayMyName(){                   // Function define
//     console.log("M");
//     console.log("o");
//     console.log("h");
//     console.log("i");
//     console.log("t"); 
// }

// sayMyName();                // mohit           // function refference


// 1.2
// function addNumber(num1, num2){
//     console.log(num1 + num2);
// }

// addNumber(2, 3);                          // 5


// 2 calling function by callback.


function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2            
}

let result = addTwoNumbers(7, 8);
// console.log("Result: ", result);         // 15



// Return:-  After return statement nothing will be executed or printed.

function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));                // hitesh
// console.log(loginUserMessage(""));                       // PLease enter a username // undefined


                                                                                                                    // function loginUserMessage1(username =  "sam"){
                                                                                                                    //     return `${username} just logged in`
                                                                                                                    // }

                                                                                                                    // loginUserMessage1();
                                                                                                                    // // sam

// rest parameter in functions

function calculateCartPrice(val1, val2, ...num1) {
    return num1 
}

const calculateCartPriceVariable = calculateCartPrice(100, 200, 300, 400);         

// console.log(calculateCartPriceVariable);            // [ 300, 400 ]
             

// accessing object into functions

const user = {
    username: "mohit",
    company: "codobux"
}

function userFunction(anyobject){
    return `Hello ${anyobject.username}, welcome to ${anyobject.company}`;
}


// console.log(userFunction(user));              // Hello mohit, welcome to codobux
// console.log(userFunction({
//      username: "Amit Kumar",
//     company: "Foxbegin"
// }));              // Hello Amit Kumar, welcome to Foxbegin


// accessing array into function

const newArray = [200, 300, 400, 500];

function arrayFunction(getArray) {
    return getArray[1];
}

// console.log(arrayFunction(newArray));                          // 300
console.log(arrayFunction([200, 300, 400, 500]));                // 300
