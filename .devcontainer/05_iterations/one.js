// for loop with break & continue


// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true



for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);                  
    
}

// console.log(element);                                 // ReffereceError



// for (let i = 0; i < 10; i++) {
//    console.log(i);
//     for (let j = 0; j < 10; j++) {
//         console.log(`value of j ${j} in the row ${i}`);
//     }

// }


// table of 1 to 10

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + ' = ' + i*j );
//     }
// }

// const newArray = ["banana", "orange", "mango"];

// for (let index = 0; index < newArray.length; index++) {
//     const element = newArray[index];
//     console.log(element);
                                                                     
// }
// // this will print below data
//     // banana
//     // orange
//     // mango





// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5







for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// Value of i is 7
// Value of i is 8
// Value of i is 9
// Value of i is 10
// Value of i is 11
// Value of i is 12
// Value of i is 13
// Value of i is 14
// Value of i is 15
// Value of i is 16
// Value of i is 17
// Value of i is 18
// Value of i is 19
// Value of i is 20