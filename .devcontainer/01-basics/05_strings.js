const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);                       // h
console.log(gameName.__proto__);                // {}


console.log(gameName.length);                       // 13
console.log(gameName.toUpperCase());                // HITESH-HC-COM
console.log(gameName.charAt(2));                    // t
console.log(gameName.at(-2));                       // o
console.log(gameName.charCodeAt(2));                // 116 // charCodeAt() is UTF-16
console.log(gameName.codePointAt(2));                // 116 // codePointAt() is Unicode.
console.log(gameName.endsWith('com'));               // true
console.log(gameName.includes('hc'))               // true
console.log(gameName.indexOf('hc'))               // 7
console.log(gameName.lastIndexOf('hc'))           // 7

let text1 = "ab";
let text2 = "cd";
let result = text1.localeCompare(text2);
console.log(result);                            //  -1  (result are always 1, 0 or -1)

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));                            // ain



let ptext = "5";
let padedtextStart = ptext.padStart(4,"S");              // SSS5
let padedtextEnd = ptext.padEnd(4,"E");                      // 5EEE
console.log(padedtextStart);
console.log(padedtextEnd);

const newStringOne = "   hitesh    "
console.log(newStringOne);                          //   hitesh   |     
console.log(newStringOne.trim());                   //hitesh|   
console.log(newStringOne.trimStart());              //hitesh   |  
console.log(newStringOne.trimEnd());               //  hitesh|   

console.log(gameName.repeat(5));                          // hitesh-hc-comhitesh-hc-comhitesh-hc-comhitesh-hc-comhitesh-hc-com

const url = "https://hitesh.com/hitesh%20choudhary"
 
console.log(url.replace('%20', '-'))                 // https://hitesh.com/hitesh-choudhary
console.log(url.replaceAll('e', '%'))                 // https://hit%sh.com/hit%sh%20choudhary

let textSearch = "Mr. Blue has a blue house";
let position = textSearch.search("Blue");                           // 15 // position of first match



const anotherString = gameName.slice(1, 4)       
console.log(anotherString);                      // ite

console.log(gameName.split('-'));               // [ 'hitesh', 'hc', 'com' ]

const newString = gameName.substring(-1, 4)  
console.log(newString);                             // hite