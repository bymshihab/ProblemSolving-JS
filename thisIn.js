"use strict"
// strict vs nonstrict mode..
//1. this in global space:
console.log(this, "hgjh") //  globalObject => window, global (every js runtime gives diffrent value)

//2. this inside a function
 function x(){
    // the value depends on strict (undefined) / nonstrict mode (globalObject)
    console.log(this, "strict");
 }
 x();

/*
    ->  this in non-strict mode: (this substitution)
    -> If the value of this keyword is undefined or null
    this keyword will replaced with globalObject
    only in non strict mode. 


    Q: What is the value inside a function? 
    => it will be undefined(strict mode). But JS has "this substitution" in nonstrict mode,
     "this" keyword is replaced with window object.
*/ 


// 3. this keyword value depends on how  the function called, (this) is called (window)

x();//undefined
window.x(); // window

// this indside a objects method: 
const obj = {
    a: 10,
    x: function(){ // here x is method
        console.log(this); // this keyword refer to the obj. (this.a)// 10
    }
}


// ==================
let y = 16;

let x = (function() {
    let y = 10;
    return {
        x: function() {
            console.log(y);
        }
    };
})();

x.x(); // Output will be 10
 // Output will be 10
// ============================


obj.x(); // output: {a: 10, x: f}

/*
    function vs method: if you make a function is a part of object is called method
    ###function inside object => method


*/ 

//4. call apply bind method(sharing methods)

                // Certainly! The `call`, `apply`, and `bind` methods in JavaScript are used to manipulate the value of `this` within a function. They are often used in scenarios where you want to borrow methods from one object and apply them to another object, or when you want to explicitly set the value of `this` within a function. Here are some common use cases with code examples:

                // i. **Borrowing Methods:**
                //    You can use `call` or `apply` to borrow a method from one object and apply it to another object.

                //    ```javascript
                let person1 = {
                    name: 'Alice',
                    greet: function() {
                        console.log('Hello, my name is ' + this.name);
                    }
                };

                let person2 = {
                    name: 'Bob'
                };

                // Borrow the greet method from person1 and apply it to person2
                person1.greet.call(person2); // Output: Hello, my name is Bob
                //    ```

                // ii. **Passing Arguments:**
                //    `call` and `apply` allow you to pass arguments to the function being called.

                //    ```javascript
                function greet(greeting) {
                    console.log(greeting + ', my name is ' + this.name);
                }

                // let person = {
                //     name: 'Alice'
                // };

                // Using call
                greet.call(person, 'Hi'); // Output: Hi, my name is Alice

                // Using apply
                greet.apply(person, ['Hi']); // Output: Hi, my name is Alice
                //    ```

                // iii. **Creating Bound Functions:**
                //    The `bind` method allows you to create a new function with a specified `this` value and optionally some initial arguments.

                //    ```javascript
                let person = {
                    name: 'Alice',
                    greet: function() {
                        console.log('Hello, my name is ' + this.name);
                    }
                };

                let greetPerson = person.greet.bind(person);

                greetPerson(); // Output: Hello, my name is Alice
                //    ```

                // These methods are powerful tools for managing the context (`this`) in JavaScript functions and are commonly used in various programming patterns and frameworks.



//5. this inside arrow function
//  (behave like enclosing lexical context)
const sObject = {
    a: 10,
    x: ()=>{
        console.log(this); //window, cause it not refer to sObject, it works global perspective in arrow function. behave like enclosing lexical context
    }
}
sObject.x();

// this inside DOM





