
// filter

//* forEach Method does not return values.

const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);                             //   undefined



// * Introducing Filter. Filter works with condions and result a true or false. If true then according to condtion value from the array are printed.

const myNum = [11, 13, 56, 44, 33]

// const codingFilter = myNum.filter(function(numItem){
//     return numItem > 20
// });

// console.log(codingFilter);                      // [ 56, 44, 33 ]


// * If we do the same thing through forEach then

// const newNum = [];

// myNum.forEach((numItem) => {
//     if(numItem > 20) {
//         newNum.push(numItem);
//     }
// }) 

// console.log(newNum);         // [ 56, 44, 33 ]


// * Filter :- in Depth

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let booksFilter = books.filter((bk) => bk.genre === "History" );
// Or Do like that:-   // let booksFilter = books.filter((bk) => { return bk.genre === "History" });

booksFilter = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(booksFilter);
  