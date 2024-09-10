const e = 4;
let f = 5;
var g  = 6;


if (true) {
    const a = 1;
    let b = 2;
    var c = 3;

    // console.log(a);    // 1
    // console.log(b);    // 2
    // console.log(c);    // 3
    // console.log(e);      // 4
    // console.log(f);      // 5
    // console.log(g);      // 6
    
}

// console.log(a);    // ReferenceError: a is not defined
// console.log(b);    // ReferenceError: b is not defined
// console.log(c);    // 3



// scope in nested functions

function one(){
    const username = "Mohit";

    function two(){
        const website = "codobux";
        // console.log(username);             // Mohit
        
    }

    // console.log(website);      // ReferenceError: website is not defined
    
    two();

}

one();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);                       // hitesh youtube
    }
    // console.log(website);               //   // ReferenceError: website is not defined
}

// console.log(username);          // ReferenceError: username is not defined








addOne(3);              // no error
function addOne(num) {
    return num + 1;
}


// addTwoVar(4);                 // ReferenceError: Cannot access 'addTwoVar' before initialization
const addTwoVar = function(num) {
    return num + 1;
}
