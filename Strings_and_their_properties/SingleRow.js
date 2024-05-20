// Calculate time required to type a word using given single-row keyboard
/**
 * Input: keyboardLayout = “abcdefghijklmnopqrstuvwxyz”, word = “dog”
Output: 22
Explanation:
Pressing the key ‘d’ requires 3 units of time ( i.e. ‘a’ -> ‘b’ -> ‘c’ -> ‘d’)
Pressing the key ‘o’ requires 11 units of time ( i.e. ‘d’ -> ‘e’ -> ‘f’ -> ‘g’ -> ‘h’ -> ‘i’ -> ‘j’ -> ‘k’ -> ‘l’ -> ‘m’ -> ‘n’ -> ‘o’)
Pressing the key ‘g’ requires 8 units of time ( i.e. ‘o’ -> ‘n’ -> ‘m’ -> ‘l’ -> ‘k’ -> ‘j’ -> ‘i’ -> ‘h’ -> ‘g’)
Therefore, the total time taken = 3 + 11 + 8 = 22.

Input: keyboardLayout = “abcdefghijklmnopqrstuvwxyz”, word = “abcdefghijklmnopqrstuvwxyz”
Output: 25
 */

const calculateWordLen = (keyboardLayout, word) => {
  console.log(word);
  let letters = word.split("");

  let alphabet = {};
  for (let i = 0; i < keyboardLayout.length; i++) {
    alphabet[keyboardLayout[i]] = i + 1;
  }

  let letterPositions = letters.map((letter) => alphabet[letter]);

  let sum = 0;
  console.log(letterPositions);
  sum = letterPositions[0]-1;
  console.log(sum, "before");
  for (let i = 0; i < letterPositions.length - 1; i++) {
    sum += Math.abs(letterPositions[i + 1] - letterPositions[i]);
  }

  console.log(sum);

  return sum;
};

console.log(calculateWordLen("abcdefghijklmnopqrstuvwxyz", "hello"));




// let alphabet = {};
// let letters = 'abcdefghijklmnopqrstuvwxyz';

// for (let i = 0; i < letters.length; i++) {
//     alphabet[letters[i]] = i + 1;
// }

// console.log(Object.values(alphabet));




  
