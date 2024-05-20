/* 1. slice */
console.log("Apple".slice(1, 4));
// → ppl [1, 4)

/* 2. IndexOf → take one or more charecter. */
console.log("coconut".indexOf("u"));
// → 5

console.log("one two three".indexOf("ee"));
// → 11

/*
3. trim() → he trim method removes whitespace 
(spaces, newlines, tabs, and similar characters)
 from the start and end of a string
*/

console.log(" okay \n ".trim());
// → okay

/* 4. The zeroPad function from the previous chapter also exists as a method.
It is called padStart and takes the desired length and padding character
as arguments */

console.log(String(6).padStart(3, "0"));
// → 006

/*
5.
n split a string on every occurrence of another string with split
and join it again with join
*/
let sentence = "Secretarybirds specialize in stomping";
let letter = sentence.split("");
// [
//     'S', 'e', 'c', 'r', 'e', 't', 'a',
//     'r', 'y', 'b', 'i', 'r', 'd', 's',
//     ' ', 's', 'p', 'e', 'c', 'i', 'a',
//     'l', 'i', 'z', 'e', ' ', 'i', 'n',
//     ' ', 's', 't', 'o', 'm', 'p', 'i',
//     'n', 'g'
//   ]
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]

console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping


/*
6.
Repeat : 
*/ 

console.log("LA".repeat(3));
// → LALALA



let myMap = new Map();

for (let i = 0; i < 5; i++) {
    myMap.set(i, i * 2); // Adding key-value pairs to the map
}

// Logging values from the Map
for (let [key, value] of myMap) {
    //console.log(`Key: ${key}, Value: ${value}`);
}

// Example: Retrieving the value associated with key 3

for(let i =0; i<myMap.size; i++ ){
    let value = myMap.get(i);
    console.log(value, "working..");
}
// let value = myMap.get(3);
// console.log(value); // Output: 6


//=======================================
// Call apply and bind method: 

// let name ={
//     firstname: "Khaled Jubair",
//     lastname: "Shihab",
//     printfullName: function(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// let name2 = {
//     firstname: "Nahian Jubair",
//     lastname: "Shuaib",
// }

// // function browing => we can brow function from other object & use it the data of 
// // other object

// name.printfullName.call(name2);

// => little modification if we want reuse function then we can keep it to outside of the object. Generally  we dont keep function inside of the object.

let namee ={
    firstname: "Khaled Jubair",
    lastname: "Shihab",
   
}

let printfullName =  function(hometown, Division){
    console.log(`${this.firstname} ${this.lastname} from ${this.hometown}, ${Division}`); // Khaled Jubair Shihab from Jhenaidah, Khulna
}


printfullName.call(namee, "Jhenaidah", "Khulna");

let name2 = {
    firstname: "Nahian Jubair",
    lastname: "Shuaib",
}

printfullName.call(name2 , "Dhaka", "Dhaka"); // invoke directly & passing a reference that points to "this variable" of the printfullName method.  

printfullName.apply(name2 , ["Dhaka", "Dhaka"]); // same as call but only diffrence is it pass an array as a second  a parameter. 

let printName = printfullName.bind(name2 , "Dhaka", "Dhaka"); // return as a method/function and called/ invoke it later  //doesn't directly invoked the method but gives you copy of the exactly same method which can  be invoked later. 
printName();









