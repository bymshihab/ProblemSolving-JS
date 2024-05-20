// function calculate(a, b, callback){
// 	return callback(a, b);
// }

// function addNumber(a,b){
// 	return a+b;
// }
// function multiplyNumber(a,b){
// 	return a*b;
// }

// console.log(calculate(10, 20, addNumber))
// console.log(calculate(20, 20, multiplyNumber))


let y = 16;

function x() {
    let y = 10;
    return {
        x: function() {
            console.log(y);
        }
    };
}

// x().x(); // Output will be 10
