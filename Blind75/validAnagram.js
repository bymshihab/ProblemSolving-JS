// 242. Valid Anagram

var isAnagram = function (s, t) {
  let sAna = s.split("").sort().join("");

  let tAna = t.split("").sort().join("");

  console.log(sAna, tAna);

  if (sAna === tAna) {
    return "this is Anagram";
  } else return "Not Anagram";
};

console.log(isAnagram("protagonist", "aprtgonisto"));


// optimize way: 

