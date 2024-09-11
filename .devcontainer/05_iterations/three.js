// for Of Loop & map()

// ["", "", ""]
// [{}, {}, {}]


// forof with array

const arr = [1, 2, 4, 6, 29, 19];

// for (const num of arr) {
//     console.log(num);
// }



// forof with string

const str = "Hello World!";

// for (const char of str) {
//     console.log(char);
// }


// Map

const map = new Map();
map.set("IN", "India");
map.set("US", "United State");
map.set("UK", "England");
map.set("ES", "Spain");

// console.log(map);
                                                                            // Map(4) {
                                                                            //   'IN' => 'India',
                                                                            //   'US' => 'United State',
                                                                            //   'UK' => 'England',
                                                                            //   'ES' => 'Spain'
                                                                            // }
// forof loop for Map

// for (const [key, value] of map) {
//     console.log(`The ${key} is a shortcode of ${value}`);
// }

                                                                            // The IN is a shortcode of India
                                                                            // The US is a shortcode of United State
                                                                            // The UK is a shortcode of England
                                                                            // The ES is a shortcode of Spain

// forof loop for object

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);                                 // TypeError: myObject is not iterable
    
}  