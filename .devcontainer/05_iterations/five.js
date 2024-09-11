// forEach

const newArr = ["C", "C++", "Java", "JS", "Ruby"];

// way 1
// newArr.forEach(function(val){
//     console.log(val);                                           // displays array elements
// });

// way 2
// newArr.forEach( (item) => {
//     console.log(item);
// });

// way 3
// function printMe(item){
//     console.log(item);
// }

// newArr.forEach(printMe)

// way 4      :- with all availble parameters
newArr.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})
// output of way 4
// C 0 [ 'C', 'C++', 'Java', 'JS', 'Ruby' ]
// C++ 1 [ 'C', 'C++', 'Java', 'JS', 'Ruby' ]
// Java 2 [ 'C', 'C++', 'Java', 'JS', 'Ruby' ]
// JS 3 [ 'C', 'C++', 'Java', 'JS', 'Ruby' ]
// Ruby 4 [ 'C', 'C++', 'Java', 'JS', 'Ruby' ]




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// javascript
// java
// python
