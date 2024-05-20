
var decodeMessage = function(key, message) {
    let result = ''
 key = Array.from(new Set(key.split(' ').join('')))
 console.log(key,'key');
 const hash = new Map()
 const alpha = 'abcdefghijklmnopqrstuvwxyz'
 
 for (let i = 0; i < alpha.length; i++) {
   hash.set(key[i], alpha[i])
 }

 console.log(hash.get('x'));

 for (let chr of message) {
   result += hash.get(chr) || ' '
 }
   
 return result
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
