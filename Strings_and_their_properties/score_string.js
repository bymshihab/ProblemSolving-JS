// 3110. Score of a String

var scoreOfString = function (s) {
  let summ = 0;

  // split all charecter in an array
  let charecters = s.split("");

  // all charecters ascii value in an array
  let ctrs = charecters.map((ctr) => ctr.charCodeAt("0"));

  for (let i = 0; i < ctrs.length - 1; i++) {
    summ += Math.abs(ctrs[i] - ctrs[i + 1]);
  }

  console.log(summ, "sum");
  return summ;
};

console.log(scoreOfString("zaz"));

// let text = 'a';
// console.log(text.charCodeAt('0')); // 97

// Efficeent way =====================

// var scoreOfString = function(s) {
//     let score = 0;

//     // Iterate through the characters of the string
//     for (let i = 1; i < s.length; i++) {
//         // Calculate the absolute difference between adjacent characters' ASCII values
//         score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
//     }

//     return score;
// };

// // Example usage:
// console.log(scoreOfString("hello")); // Output: 13
// console.log(scoreOfString("zaz"));   // Output: 50
