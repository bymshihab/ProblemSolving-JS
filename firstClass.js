// The ability of a function to be used as a value, passed inside another function, or returned as another function makes that function a first-class function. Here are some examples:

//ex1: where return as a function..  
let b = function(parameter){
    return function abc(){

    }
 }

//ex:2: function passed as an argument
setTimeout(function() {
    console.log("This is a callback function.");
}, 1000);