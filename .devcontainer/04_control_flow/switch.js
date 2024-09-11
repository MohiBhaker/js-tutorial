// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = "march";

switch (month) {
    case "jan":
        console.log("january");
        break;

    case "feb":
        console.log("feb");
    break;

    case "march":
        console.log("March");
        break;

    case "april":
        console.log("april");
        break;
    
    case "may":
        console.log("May");
        break;

    default:
        console.log("Please select a month");
        break;
}




//Note: if we remove break from any case then below case will also print with it untill there come a break it will print all values except default