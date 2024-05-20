//  problem: reverse string with multiple whitespaces: 

let str = "  I     am  shihab  ";

// Remove extra spaces using regex and trim
let trimmedStr = str.replace(/\s+/g, ' ').trim();

let reverseStr = trimmedStr.split(" ").reverse().join(" ")

console.log(reverseStr); 

