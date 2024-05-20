/*This feature—being able to reference a specific instance of a local
binding in an enclosing scope—is called closure.*/

function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10
