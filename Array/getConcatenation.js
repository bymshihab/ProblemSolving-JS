// 1929. Concatenation of Array

var getConcatenation = function (nums) {
  return nums.concat(...nums);
};

console.log(getConcatenation([1,2,3,1,1,3]));
