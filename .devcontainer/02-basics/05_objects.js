
// 1. assign 
// const returnedTarget = Object.assign(target, source);

const objOne = {a: "1", b: "2"};

const objTwo = Object.assign(objOne);

// console.log(obj2);

// assign with Warning for Deep Clone

// const obj1 = { a: 0, b: { c: 0 } };
// const obj2 = Object.assign({}, objTwo);
// console.log(obj2); // { a: 0, b: { c: 0 } }

// obj1.a = 1;
// console.log(obj1); // { a: 1, b: { c: 0 } }
// console.log(obj2); // { a: 0, b: { c: 0 } }

// obj2.a = 2;
// console.log(obj1); // { a: 1, b: { c: 0 } }
// console.log(obj2); // { a: 2, b: { c: 0 } }

// obj2.b.c = 3;
// console.log(obj1); // { a: 1, b: { c: 3 } }
// console.log(obj2); // { a: 2, b: { c: 3 } }

// // Deep Clone
// const obj3 = { a: 0, b: { c: 0 } };
// const obj4 = structuredClone(obj3);
// obj3.a = 4;
// obj3.b.c = 4;
// console.log(obj4); // { a: 0, b: { c: 0 } }

// Merging objects

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.


// 2. Create

// const createObj= {a: 4, b: 5, c: 6};

// const newCreateObj = Object.create(createObj);

// newCreateObj.a = 7;
// newCreateObj.b = {d: 10};


// console.log(createObj);                  //{ a: 4, b: 5, c: 6 }
// console.log(newCreateObj);              // { a: 7, b: { d: 10 } }

// 3. defineProperties() & defineProperty()

const definePropertiesObj = {name: "aman", age: 28};

const definePropertyObj = {name: "ajay", age: 18};


const definePropertiesResult = Object.defineProperties(definePropertiesObj, {
    name: {value: "Ankit"},
    year: {value: 1990}
});

// console.log(definePropertiesObj);              // { name: 'Ankit', age: 28 }

// console.log(definePropertiesResult.year);                   // 1990

const definePropertyResult = Object.defineProperty(definePropertyObj,  "gender", {value: "Male"} );

// console.log(definePropertyResult.gender);  // Male


// 4. Interations of Objects 

    // 4.1 Entries enteries()
    const itObj = {a: "hello", b: "world", c: {d: "India"}};

    const itObjEntries = Object.entries(itObj);

    // console.log(itObj);                  //     { a: 'hello', b: 'world', c: { d: 'India' } }
    // console.log(itObjEntries);            // [ [ 'a', 'hello' ], [ 'b', 'world' ], [ 'c', { d: 'India' } ] ]

    // but we use it in the below way

    let test = " ";
    for(let [itKeys, itValues] of itObjEntries){
        test += itKeys + ": " +  itValues;
    }

    // console.log(test);                           // [ [ 'a', 'hello' ], [ 'b', 'world' ], [ 'c', { d: 'India' } ] ]
    

    // // 4.2 keys  

    const itObjKeys = Object.keys(itObj);

    // console.log(itObjKeys);                        // [ 'a', 'b', 'c' ]
    
    // // 4.2 keys  

    const itObjValues = Object.values(itObj);

    // console.log(itObjValues);                     // [ 'hello', 'world', { d: 'India' } ]
    
    // 5. freeze()

            // Object.preventExtensions() allows modifications, but prevents addition of properties.

            // Object.seal() allows modifications, but prevents additions and deletions of properties.

            // Object.freeze() prevents modifications, additions and deletions of properties.

    const freezeObj = {a: "hello", b: "world", c: {d: "India"}};

    Object.freeze(freezeObj);       

    freezeObj.a = 3;

    // console.log(freezeObj);      // Frozen Object { a: 'hello', b: 'world', c: { d: 'India' } }



    const extensibleObj = {firstName:"John", lastName:"Doe"};

    // Prevent Extensions
    Object.preventExtensions(extensibleObj);
    
    // This will return false

    // console.log(Object.isExtensible(extensibleObj));     // fasle



    const sealObj = {firstName:"John", lastName:"Doe"};

    // Seal Object
    Object.seal(sealObj)                 

    // This will throw an error
    delete sealObj.lastName;

    // console.log(Object.isSealed(sealObj));             //  true
    

    // toString
    // console.log(Object.toString(sealObj));         // function Object() { [native code] }
    




    // 6. fromEntries(), preventExtensions()

    const fromEntriesObj = [
        ["apple", 20],
        ["orange", "21"],
        ["banana", 22],
    ];

    const fromEntriesResult = Object.fromEntries(fromEntriesObj);

    // console.log(fromEntriesResult);

    


// 7. getOwnPropertyDescriptor, getOwnpropertyDescriptors and getOwnPropertyNames
       const ownObj = {a: "hello", b: "world", c: {d: "India"}};

       const getOwnPropertyDescriptorObj = Object.getOwnPropertyDescriptor(ownObj, "a");
       const getOwnPropertyDescriptorsObj = Object.getOwnPropertyDescriptors(ownObj);
       const getOwnPropertyNamesObj = Object.getOwnPropertyNames(ownObj);
    
    //    console.log(getOwnPropertyDescriptorObj);
    //                                                             //    {
    //                                                             //     value: 'hello',
    //                                                             //     writable: true,
    //                                                             //     enumerable: true,
    //                                                             //     configurable: true
    //                                                             //   }

    //    console.log(getOwnPropertyDescriptorsObj);               // {
    //                                                             //     a: {
    //                                                             //       value: 'hello',
    //                                                             //       writable: true,
    //                                                             //       enumerable: true,
    //                                                             //       configurable: true
    //                                                             //     },
    //                                                             //     b: {
    //                                                             //       value: 'world',
    //                                                             //       writable: true,
    //                                                             //       enumerable: true,
    //                                                             //       configurable: true
    //                                                             //     },
    //                                                             //     c: {
    //                                                             //       value: { d: 'India' },
    //                                                             //       writable: true,
    //                                                             //       enumerable: true,
    //                                                             //       configurable: true
    //                                                             //     }
    //                                                             //   }

    //    console.log(getOwnPropertyNamesObj);                // [ 'a', 'b', 'c' ]

       

    
