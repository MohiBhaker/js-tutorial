// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Nested Object
const realUser = {
    name: "Sunita",
    email: "sunita@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sujata",
            lastname: "Kumari"
        }
    } 
}

// console.log(realUser.fullname.userfullname.firstname);




// Merge multiobjects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2, obj4)

// Merge multiobjects spread method for mege
// const obj3 = {...obj1, ...obj2}
console.log(obj3);

// data base APIs data be like
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// Object Methods

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));      // ALL keys in an array
// console.log(Object.values(tinderUser));    // All values in an array
// console.log(Object.entries(tinderUser));    // All entries (keys an values) with each entry array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));       // check if the value exits or not in object


// accessing objects without object.key
const course = {
    courseName: "Js Lean",
    courseInstructor: "Amam Aujla",
    id: 9090
}


const {courseInstructor} = course
// console.log(courseInstructor)
// we can use also - deconstructing
const {courseInstructor: instructor} = course
// console.log(instructor)


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

