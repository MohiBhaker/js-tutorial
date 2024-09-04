// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros)

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// // console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// // console.log(real_another_array);



// // console.log(Array.isArray("Hitesh"))
// // console.log(Array.from("Hitesh"))
// // console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// // console.log(Array.of(score1, score2, score3));


// My Practise array


// basics methods
let array = ["Banana", "Apple", "Orange", "Mango"];

// $arr_method = array.at(2);            // Orrange

// $arr_method = array.join(" - ");     // Banana - Apple - Orange - Mango

// $arr_method = array.slice(1, 3);     // [ "Apple", "Orange", "Mango" ] 

// $arr_method = array.splice(1, 3);     [ "Apple", "Orange", "Mango" ]  // original also changed

// $arr_method = array.copyWithin(1, 2, 3);  //  array.copyWithin(target, start, end) Not Supported

// $arr_method = array.fill("Papaya", 2, 4);     // array.fill(value, start, end) // [ 'Banana', 'Apple', 'Papaya', 'Papaya' ] // orignal [ 'Banana', 'Apple', 'Papaya', 'Papaya' ]

// $arr_method = array.includes("Apple");     // array.includes(element, start)   // true

// $arr_method = array.length;     // array.length  || array.length = number

// $arr_method = array.push("Strawberry");    
// $arr_method = array.pop();     
// $arr_method = array.reverse();     // original array also changed

// $arr_method = array.unshift("Mangos")       // [ 'Mangos', 'Banana', 'Apple', 'Orange', 'Mango' ]
// $arr_method = array.shift()       // remove first element of an array
// $arr_method = array.sort()       // change the orignal value also

// $arr_method = array.toReversed()      // change the orignal does not value also
// $arr_method = array.toSorted()       // change the orignal does not value also
// $arr_method = array.toSpliced()       // change the orignal does not value also
// $arr_method = array.toSpliced()       // change the orignal does not value also

// $arr_method = array.with(2, "Banana");       // change the specific value with syntax: array.with(index, value) // original will not changed



// console.log(array);
// console.log($arr_method);


// let text = "ABCDEFG"
// const myArr = Array.from(text);               // Array.from() method returns an array from any object with a length property.
// ['A', 'B', 'C', 'D', 'E', 'F', 'G' ]
// console.log(myArr);



// The Array.of() method creates a new array from any number of arguments.  // The Array.of() method can take any type of arguments.

let arrayOf = Array.of("Red", "Green", "Blue");

// console.log(arrayOf);





// Intermediate Level Methods.


let newArray = ["Aman","Sohan", "Sunita"];
// console.log(newArray);

// // 1. array.entries() 
// const list = newArray.entries();

// let test = " ";

// for (let x of list) {
//     test += x + "<br>";
// }

// console.log(test);                  //  0,Aman1,Sohan2,Sunita

// // 2. array.every()
// function checkName(newArray){
//     return newArray.length > 2;
// }

// $checkEvery = newArray.every(checkName);

// console.log($checkEvery);         // true

// 3. filter()
// function getData(newArray){
//     return newArray.length > 4; 
// }

// $arrayFilter = newArray.filter(getData);        // [ 'Sohan', 'Sunita' ]  // orignal array:-   [ 'Aman', 'Sohan', 'Sunita' ]
                                                       

// console.log($arrayFilter);


// 4. forEach
// const sentence = "Cert iwise";
// const characters = sentence.split('');            // convert characters of sentence into an arrays

// characters.forEach(function(character) {
//     console.log(character);                         // C
//                                                     // e
//                                                     // r
//                                                     // t

//                                                     // i
//                                                     // w
//                                                     // i
//                                                     // s
//                                                     // e
// });
         
// forEach second example
// const products = [
//     { id: 1, name: "Product 1", price: 10 },
//     { id: 2, name: "Product 2", price: 20 },
//     { id: 3, name: "Product 3", price: 30 },
//   ];
  
//   const productNames = []; // Declare an empty array to hold the product names
  
//   products.forEach(function(product) {
//     productNames.push(product.name); // Add the name of each product to the productNames array
//   });
  
//   console.log(productNames); 

// 5.  Keys:-  array.keys()

// const arrayKeys = newArray.keys();

// let test = "";

// for(let x of arrayKeys) {
//     test += x + "</br>";
// }

// console.log(test);

// 6. Map 

// const products = [
//     { id: 1, name: "Product 1", price: 10 },
//     { id: 2, name: "Product 2", price: 20 },
//     { id: 3, name: "Product 3", price: 30 },
//   ];
  
//   const productNames = []; // Declare an empty array to hold the product names
  
//   products.map(function(product) {
//     productNames.push(product.name); // Add the name of each product to the productNames array
//   });
  
//   console.log(productNames); 


// 5. Find Methods for Array

const newArray2 = ["Aman","Sohan", "Sunita"];

// find()                        // The value of the first element that passes a test
// findIndex()                        // The index of the first element that passes a test
// findLast()                        // The value of the last element that passes a test
// findLastIndex()                        // The index of the last element that passes a test

function findData(newArray){
    return newArray.length > 4; 
}

// $arrayFind = newArray.find(findData);         
// $arrayFind = newArray.findIndex(findData);         
// $arrayFind = newArray.findLast(findData);         
// $arrayFind = newArray.findLastIndex(findData);         
                                                       

// console.log($arrayFind);



// 7. flat & flatMap

// flat 

let flatArray = [1, 2, 3, 4, [1, 2], [1,[1, 8], [78, 90, 99]]];



// console.log(flatArray.flat(3));                                                 // [ 1,  2, 3, 4,  1, 2,  1, 1, 8, 78, 90, 99 ]


// const arr1 = [1, 2, 3, 4];

// const arrMap = arr1.map((x) => [x * 2]);
// // [[2], [4], [6], [8]]
// console.log(arrMap);


// const arrFlatMap = arr1.flatMap((x) => [x * 2]);
// // [2, 4, 6, 8]
// console.log(arrFlatMap);


// // only one level is flattened
// const arrFlatMap1 = arr1.flatMap((x) => [[x * 2]]);
// // [[2], [4], [6], [8]]
// console.log(arrFlatMap1);


// 8. array.some()

// const ages = [3, 10, 18, 20];
// let agesSome = ages.some(checkAdult);

// function checkAdult(age) {
//   return age > 18;
// }

// console.log(agesSome);


// 9. array.values()

// Create an Array

const arrayValues = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const arrayValuesList = arrayValues.values();

// List the Values
let text = "";
for (let x of arrayValuesList) {
  text += x + "<br>";
}

console.log(text);


// The valueOf() method returns the array itself.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();



