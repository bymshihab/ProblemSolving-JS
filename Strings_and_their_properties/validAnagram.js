var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }
  console.log(map);

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (map[letter] === undefined) {
      console.log(map);
      return false;
    }
    if (map[letter] < 1) {
      console.log(map);
      return false;
    }
    map[letter]--;
  }
  console.log(map);
  return true;
};

console.log(isAnagram("nagarama", "anagram"));
