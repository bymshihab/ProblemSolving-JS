
a();
b();

// function Satement = function Decelaration (same)
function a(){
    console.log("a called");
}

// function Expression
var a = function (){
    console.log("b is called");
}
/**
 * satement vs expression common diffrence => hoisting.
 * 
*/

// Annonymus function => Those function has no name
//*** Annonymus function is used when the function used as values.
var c = function (){
    console.log("Annonymus function");
}

// Named function expression (same as annonymus function but same as a name.) 
var c = function sum (a, b){
    return console.log(a+b);
}

// first class function/ first class citizens - ability to be used like values.

/*
   the ablity of this function use as values pass inside another function, return value as another function make that function as first class function. 
*/ 

// return value as a function
 var b = function(param1 ){
    return function xyz(){

    }
 }














