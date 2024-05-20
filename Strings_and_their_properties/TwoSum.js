// varriation: bruteforce
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) {
//             return [i, j]
//           }
//         }
//       }
//       return null

// };

// optimize code:

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
        console.log(complement,"tea");
      return [i, map.get(complement)];
    } else {
        map.set(nums[i], i);
        console.log(nums[i], i, "caffforee");
    }
  }

  console.log(complement, "asjdj");
};

console.log(twoSum([11, 7, 2, 15], 9));


